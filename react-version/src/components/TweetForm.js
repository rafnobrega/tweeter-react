import React from 'react';

function TweetForm() {
  const question = "What are you humming about?";
  return (
    <main className="container">
      <section className="newtweet">
        <form
          method="post"
          action="/tweets"
          className="newtweet__form"
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          <textarea
            className="form__textarea"
            name="text"
            placeholder={question}
          ></textarea>
          <input
            onClick={(event) => {
              event.preventDefault();
            }}
            type="submit"
            value="Tweet"
            className="form__input"
          />
          <span className="form__counter">140</span>
        </form>
      </section>
    </main>
  );
}

export default TweetForm;