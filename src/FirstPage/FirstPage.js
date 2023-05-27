import "./FirstPage.css";
import JoinComunity from "../components/JoinCommunity";
import Flow from "../components/Flow";
import Comunity from "../components/Comunity";
import Questions from "../components/Questions";
import Earning from "../components/Earning";
import Header from "../components/Header";
import IntroVideo from "../components/IntroVedio";
import { useState,useEffect } from "react";
import QuestionsVedio from "../components/QuestionsVedio";
import CallFooter  from "../components/CallFooter/CallFooter";
import  AddressFooter  from "../components/AddressFooter/AddressFooter";
import PeopleList from "../components/PeopleList/PeopleList";

const FirstPage = () => {

  return (
    <>
    <div className="layout">  
        <div className="content1"> <Header /></div>
        <div className="content2"><Earning /></div>
        <div className="content3"><IntroVideo /></div>
        <div className="content4"><JoinComunity /></div>
        <div className="content5"><PeopleList /></div>
        <div className="content6"><Flow /></div>
        <div className="content7"><Comunity /></div>
        <div className="content8"><Questions /></div>
        <div className="content9"><QuestionsVedio /></div>
        <div className="content10"><CallFooter /></div>
        <div className="content11"><AddressFooter /></div>
      </div>
    </>
  );
};

export default FirstPage;
