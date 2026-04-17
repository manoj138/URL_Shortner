import React, { useState } from "react";
import Input from "../../../components/common/Input";
import { Link, Send } from "lucide-react";
import Button from "../../../components/common/Button";
import { Api, handleApiError } from "../../../components/common/Api/api";

const Urlindex = () => {
const [originUrl, setOriginUrl] = useState({
  originalUrl: ""
});
  const [shortUrl, setShortUrl] = useState();
  console.log("🚀 ~ Urlindex ~ originUrl:", originUrl);

  const inputHandler = (e) => {
  setOriginUrl((prev) => ({
  ...prev,
  [e.target.name]: e.target.value,
}));
  };

  const submitHandler = async (e)=>{
   e.preventDefault();
    try {
        const res = await Api.post("/url/shorten", originUrl);
        setShortUrl(res.data.data)
        console.log("🚀 ~ submitHandler ~ res:", res)
    } catch (error) {
        return handleApiError(error)
    }
  }




  return (
    <div>
      <form onSubmit={submitHandler}>
        <Input
          icon={Link}
          label="Enter your URL"
          name={"originalUrl"}
          placeholder={"Enter your URL"}
          value={originUrl.originalUrl || ""}
          type="text"
          onChange={inputHandler}
        />
        <Button icon={Send} type="submit">
          Shorten URL
        </Button>
      </form>

      <div >
        {shortUrl}
      </div>
    </div>
  );
};

export default Urlindex;
