import React from "react";

const Header = (props) => {
  return (
    <header>
      <div className="search_input_container">
        <form action="" onSubmit={props.handleSubmit}>
          <input
            type="text"
            placeholder="Search for a Movie"
            id="search_input"
            onChange={props.handleChange}
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
