import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./searchCharForm.scss";

import { useState } from "react";
import useServices from "../../servises/data";

const SearchCharForm = () => {
  const [userHero, setUserHero] = useState();
  const [hero, setHero] = useState(null);
  const [error, setError] = useState(false);
  const { getheroByName, clearError, loading } = useServices();

  const getHeroData = (name) => {
    getheroByName(name).then(loadHero).catch(setError(true));
  };

  const loadHero = (resp) => {
    clearError();
    setHero(resp);
  };

  const setUserAnswer = (answ) => {
    setUserHero(answ);
  };

  return (
    <div>
      <Formik
        initialValues={{
          heroName: "",
        }}
        validationSchema={Yup.object({
          heroName: Yup.string().required("This field is required"),
        })}
      >
        {({ values }) => (
          <Form>
            <div className="char__search-form">
              <label className="char__search-label" htmlFor="charName">
                Or find a character by name:
              </label>
              <div className="char__search-wrapper">
                <Field
                  onKeyUp={() => setUserAnswer(values)}
                  id="charName"
                  name="heroName"
                  type="text"
                  placeholder="Enter name"
                />

                <button
                  onClick={() => getHeroData(userHero.heroName)}
                  type="submit"
                  className="button button__main"
                >
                  <div className="inner">find</div>
                </button>
              </div>
              <ErrorMessage
                className="char__search-error"
                component="div"
                name="heroName"
              />
              {hero ? (
                <div className="char__search-success">
                  {`There is! Visit ${hero.name} page?`}
                  <button style={{ marginLeft: "95px" }}>Click me</button>
                </div>
              ) : null}
              {error && !hero ? (
                <div className="char__search-error">
                  The character was not found. Check the name and try again
                </div>
              ) : null}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchCharForm;
