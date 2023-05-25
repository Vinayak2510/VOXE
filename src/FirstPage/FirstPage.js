import "./FirstPage.css";
import JoinComunity from "../components/JoinCommunity";
import Flow from "../components/Flow";
import PeopleList from "./PeopleList";
import Comunity from "../components/Comunity";
import Questions from "../components/Questions";
import Earning from "../components/Earning";
import Header from "../components/Header";

const FirstPage = () => {

  return (
    <>
    <div>
      <Header />
      <Earning />
      <JoinComunity />
      <PeopleList />
      <Flow />
      <Comunity />
      <Questions />
    </div>
    </>
  );
};

export default FirstPage;
