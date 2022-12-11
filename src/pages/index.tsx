import Image from 'next/image';
import React from 'react';

const Header = (props: { heading: string }) => {
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <h1 className="text-3xl italic text-white">{props.heading}</h1>
    </div>
  );
};

const Content = () => {
  return (
    <div className="mx-auto flex w-11/12 flex-row py-20">
      <div className="h-96 w-1/2 ">
        <h2 className="text-center text-2xl text-white">
          Support Me by Buying A{' '}
          <span className="text-highlighted">Coffee!</span>
        </h2>
        <form className="mx-auto flex w-4/5 flex-col justify-center">
          <div className="my-2 flex w-full flex-row">
            <label htmlFor="name" className="w-1/4 p-0 text-white">
              Name
            </label>
            <input
              className="h-10 w-3/4 resize-none rounded-md outline-none"
              id="name"
            ></input>
          </div>
          <div className=" my-2 flex w-full flex-row ">
            <label htmlFor="message" className="w-1/4 p-0 text-white">
              Message
            </label>
            <textarea
              className="h-40 w-3/4 resize-none rounded-md outline-none"
              id="message"
            ></textarea>
          </div>
          <button className="mx-auto my-2 h-10 w-full rounded-md bg-highlighted">
            Send me a Coffee
          </button>
        </form>
      </div>
      <div className="flex h-96 w-1/2 flex-col items-center justify-center">
        <div className="-mt-20 w-1/2">
          <Image
            src={'/pngegg.png'}
            width={500}
            height={1000}
            alt="Coffee mug"
          />
        </div>
      </div>
    </div>
  );
};
type CommentPropType = {
  comment: string;
  name: string;
};
const Previous = (props: { comments: [CommentPropType] | null }) => {
  return (
    <div>
      <Header heading="Users that already supported me:" />
      <div className="mx-auto w-4/5  pb-16">
        {props?.comments?.length ? (
          props?.comments?.map((eachComment, key) => {
            return (
              <div key={key} className="py-6">
                <h4 className="mx-auto w-2/3 text-center text-lg text-white">
                  {eachComment.comment}
                </h4>
                <h5 className=" text-center text-3xl text-white ">
                  ~{eachComment.name}
                </h5>
              </div>
            );
          })
        ) : (
          <h4 className="mx-auto w-2/3 text-center text-lg text-white">
            No users yet !!!
          </h4>
        )}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Header heading="Buy Me A coffee" />
      <Content></Content>
      <Previous comments={null}></Previous>
    </div>
  );
};

export default Home;
