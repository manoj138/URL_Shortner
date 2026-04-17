
const { handle400, formatMongoError, handle404 } = require("../helper/mongoErrorHandler");
const { handle201, handle200 } = require("../helper/successHandler");
const Url = require("../models/UrlModel");
const { nanoid } = require("nanoid");

const createShortUrl = async (req, res) => {
    try {
        const { originalUrl } = req.body;
        if (!originalUrl) {
            return handle400(res, "URL is required")
        }
        const urlPattern = /^(https?:\/\/)/;
        if (!urlPattern.test(originalUrl)) {
            return handle400(res, "Invalid URL format")

        }
        let shortCode;
        let exists;

        do {
            shortCode = nanoid(6);
            exists = await Url.findOne({ shortCode })
        } while (exists)

        const newUrl = await Url.create({
            originalUrl,
            shortCode
        })

        const shortUrl = `${process.env.BASE_URL}/${shortCode}`;

        return handle201(res, shortUrl, "short  url genrated")

    } catch (error) {
        return formatMongoError(res, error)
    }
}

const redirectUrl = async (req, res) => {
    try {
        const { shortCode } = req.params;
        const url = await Url.findOne({ shortCode });

        if (!url) {
            return handle404(res, "URL not found")
        }
        url.clicks += 1;
        await url.save();
        return res.redirect(url.originalUrl);
    } catch (error) {
        return formatMongoError(res, error)
    }
}

const getAllUrls = async (req, res) => {
    try {
        const urls = await Url.find().sort({ createdAt: -1 });

        return handle200(res, urls, "All URLs fetched")

    } catch (error) {
        return formatMongoError(res, error);
    }
};

const deleteUrl = async (req, res) => {
    try {
        const { id } = req.params;

        const url = await Url.findByIdAndDelete(id);

        if (!url) {
            return handle404(res, "URL not found");
        }
        return handle200(res, url, "URL deleted successfully");

    } catch (error) {
        return formatMongoError(res, error);
    }
};

module.exports = {
    createShortUrl,
    redirectUrl,
    getAllUrls,
    deleteUrl
}