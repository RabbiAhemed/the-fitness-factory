import React from "react";

const Blog = () => {
  return (
    <div className="mx-2 my-5 p-5">
      <div>
        <h4>How react works</h4>
        <p>
          Ans: React implements a virtual DOM that is basically a DOM tree
          representation in JavaScript.So when it needs to read or write to the
          DOM, it will use the virtual representation of it. Then the virtual
          DOM will try to find the most efficient way to update the browser’s
          DOM. React has 6 core. Jsx allows us to write code like html.component
          is one kind of function through which react shows data.props is the
          set of data parameter for a component.state is the state of a
          component.it detects if the websites state is changed if changed
          useEffect works according to that.Event handler can be added to react
          and external data can be loaded using fetch inside useEffect.
        </p>
        <h4>Difference between props and state</h4>
        <p>
          Props is properties.it is used to pass data from one component to
          another component.props is immutable it is read only property.it
          stores the value of attribute State is is representation of an
          application that can change.every component can have state each.it is
          mutable and accesed /local for the component only means the data is
          passed only in the component.it is the heart of ract component.it
          represent the components local state.State is updatable
        </p>
        <h4>Usages of UseEffect</h4>
        useEffect use cases
        <li>
          <span className="fw-bold">Side Effect Runs After Every Render :</span>{" "}
          If not pass the dependency array to the useEffect hook, the callback
          function executes on every render. Thus React will run the side effect
          defined in it after every render.
        </li>
        <li>
          <span className="fw-bold">
            Side Effect Runs Only Once After Initial Render :
          </span>
          To avoid the callback functions execution on every render we can pass
          an empty array as the second argument to the useEffect hook.
        </li>
        <li>
          <span className="fw-bold">
            Side Effect Runs After State Value Changes :
          </span>
          For setting a state, the side effect will run every time the value of
          the state variable changes.
        </li>
        <li>
          <span className="fw-bold">
            Side Effect Runs After Props Value Change :
          </span>{" "}
          Just like the state, we can also use props as a dependency to run the
          side effect. In this case, the side effect will run every time there
          is a change to the props passed as a dependency.
        </li>
        <li>
          <span className="fw-bold">
            Side Effect Runs After Props and State Value Change:
          </span>{" "}
          This may occur when side effect depends on the state and props values.
          In this case, we need to pass both the state and props variables as
          dependencies.
        </li>
        <li>
          <span className="fw-bold">Side EffectCleanup :</span>
          To clean up a side effect, we need to return a function from the
          callback function we pass to the useEffect hook.
        </li>
      </div>
    </div>
  );
};

export default Blog;
