import React from "react";
import { useState } from "react";
import emojis from "../emojis";
import alphabets from "../alphabets";
import data from "../data";
import Data from "./Data";
import { CopyToClipboard } from "react-copy-to-clipboard";
import shuffledArray from "../shuffledEmojis";

function Encryptor() {
  const [currentEmoji, setCurrentEmoji] = useState("");
  const [input, setInput] = useState("");
  const [emojiState, setEmojiState] = useState(0);
  const copyEmojiData = [];
  function setMoji(id) {
    setEmojiState(id);
    setCurrentEmoji(emojis[id]);
    console.log(currentEmoji);
  }
  function handleInput(e) {
    setInput(e.target.value);
  }
  return (
    <div className="xl:grid xl:grid-cols-2">
      {/**div-1 starts*/}
      <div className="xl:mx-8 mx-4">
        <div className="h-[100px] xl:h-[150px]">
          <h1 className="text-center">
            {currentEmoji
              ? "The selected emoji is"
              : "please select an emoji for key"}
          </h1>
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
      {/**div-2 starts */}
      <div className="inputClass relative">
        <textarea
          maxlength="120"
          onChange={handleInput}
          className="w-[95%] px-5 py-5 mx-2 my-2 xl:mt-[50px] xl:text-2xl xl:focus:outline-none "
          style-input=""
          placeholder="Write your message here..."
          spellcheck="false"
        ></textarea>
        <span className="absolute top-[30%] left-[82.5%] xl:text-xl">
          {input.length}/120
        </span>
        {/**output div start */}
        <div className="output xl:mt-8  ">
          <h1 className="text-l xl:text-2xl">
            {input && currentEmoji
              ? "The output is"
              : input && currentEmoji
              ? "You must select an emoji"
              : "please type some text"}
          </h1>
          <span className="xl:flex xl:flex-wrap xl:text-2xl transition-all ">
            {currentEmoji &&
              input.split("").map((char, i) => {
                copyEmojiData.push(
                  shuffledArray[(char.charCodeAt(0) + emojiState) % 957]
                );
                copyEmojiData.join(" ");
                console.log(copyEmojiData.join(" "));
                return (
                  <Data
                    img={
                      data[
                        alphabets.indexOf(char) === -1
                          ? alphabets.indexOf("default")
                          : alphabets.indexOf(char)
                      ].img
                    }
                    emojiNum={(char.charCodeAt(0) + emojiState) % 957}
                    time={i}
                    key={i}
                  />
                );
              })}
          </span>
          <CopyToClipboard text={copyEmojiData.join(" ")}>
            <button
              disabled={!copyEmojiData}
              className="px-4 py-2 my-4 cursor-pointer text-white bg-purple-500 shadow-md hover:scale-95 transition-all rounded"
            >
              Copy to clipboard with button
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}

export default Encryptor;
