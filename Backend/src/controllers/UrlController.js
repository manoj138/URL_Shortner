
const { handle400, formatMongoError, handle404 } = require("../helper/mongoErrorHandler");
const { handle201 } = require("../helper/successHandler");
const Url = require("../models/UrlModel");
const { nanoid } = require("nanoid");

const createShortUrl = async (req, res) => {
    try {
        const originalUrl = req.body;
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

        const shortUrl = `${process.env.BASE_URl}/${shortCode}`;

        return handle201(res, shortUrl, "short  url genrated")

    } catch (error) {
       return formatMongoError(res, error)
    }
}

const redirectUrl = async (req, res)=>{
    try {
        const shortCode = req.params;
       
        const url = await Url.findOne({shortCode});

        if(!url){
            return handle404(res, "URL not found")
        }
        url.clicks += 1;
        await url.save();
        return res.redirect(url.originalUrl);
    } catch (error) {
        return formatMongoError(res, error)
    }
}

module.exports = {
    createShortUrl,
    redirectUrl
}