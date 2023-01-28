import React, { useState } from "react";
import Header from "./Header";
import emojis from "../emojis";
import shuffledArray from "../shuffledEmojis";

function Decryptor() {
  const [key, setKey] = useState(0);
  const [currentEmoji, setCurrentEmoji] = useState("");
  const [emojiText, setEmojiText] = useState("");
  const [validEmoji, setValidEmoji] = useState(false);
  let arr = [];
  let validUniCodeArr = [];
  function setMoji(id) {
    setKey(id);
    setCurrentEmoji(emojis[id]);
  }
  function handleInput(e) {
    setEmojiText(e.target.value.replace(/\s/g, ""));
    console.log(emojiText);
  }
  function handleValid() {
    setValidEmoji(true);
  }
  return (
    <div className="xl:grid xl:grid-cols-3">
      {/**div-1 starts */}
      <div className="relative">
        <textarea
          maxlength="120"
          onChange={handleInput}
          value={emojiText}
          className="w-[95%] px-5 py-5 mx-2 my-2 xl:mt-[50px] xl:text-2xl xl:focus:outline-none "
          style-input=""
          placeholder="Write your message here..."
          spellcheck="false"
        ></textarea>
        <span className="absolute top-[30%] left-[82.5%] xl:text-xl">
          {emojiText.length}/120
        </span>
      </div>
      {/**div-2 starts */}
      <div>
        <div className="h-[100px] xl:h-[150px]">
          <h1 className="text-center">
            {key
              ? "The selected key🔑 is"
              : "please select an emoji for decryption"}
          </h1>
          <span>{key}</span>
          <h1 className="text-center text-5xl xl:text-7xl py-6">
            {currentEmoji}
          </h1>
        </div>
        <ul className="list xl:h-[550px] xl:flex-wrap h-[60px] xl:overflow-scroll xl:overflow-x-hidden overflow-x-scroll overflow-y-hidden ">
          {emojis.map((item, index) => {
            return (
              <li key={index} onClick={() => setMoji(index)}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      {/**div-3 starts */}
      <div className="xl:flex xl:flex-wrap xl:text-2xl transition-all ">
        {emojiText.split("").map((item, index) => {
          arr.push(item);
          {
          }
        })}
        {/* {console.log(arr)} */}

        <div className="hidden">
          {
            (validUniCodeArr = arr.filter((char) => {
              return <span>{char.codePointAt(0) !== undefined}</span>;
            }))
          }
        </div>
        {/* {console.log(validUniCodeArr)} */}
        {validUniCodeArr.map((item, i) => {
          console.log(
            (shuffledArray.indexOf(
              `${validUniCodeArr[i]}${validUniCodeArr[i + 1]}`
            ) -
              key) %
              957
          );
          if (
            String.fromCharCode(
              shuffledArray.indexOf(
                `${validUniCodeArr[i]}${validUniCodeArr[i + 1]}`
              ) - key
            ).charCodeAt(0) >= 32 &&
            String.fromCharCode(
              shuffledArray.indexOf(
                `${validUniCodeArr[i]}${validUniCodeArr[i + 1]}`
              ) - key
            ).charCodeAt(0) <= 126
          ) {
            return String.fromCharCode(
              (shuffledArray.indexOf(
                `${validUniCodeArr[i]}${validUniCodeArr[i + 1]}`
              ) -
                key) %
                957
            );
          }
        })}

        {/* {String.fromCharCode(shuffledArray.indexOf() - key)} */}
      </div>
    </div>
  );
}

export default Decryptor;
