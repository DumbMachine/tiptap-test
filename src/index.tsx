import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Redirect, Route, NavLink } from "react-router-dom";

import { Tiptap } from "./components";

import {
  BASIC_CONTENT,
  MARKDOWN_SHORTCUTS_CONTENT,
  POPOVER_EDITOR_CONTENT,
  SUGGESTIONS_EDITOR_CONTENT,
  SYNTAX_HIGHLGHTING_CONTENT,
  LONG_DOCUMENT_PERFORMANCE_CONTENT,
  READ_ONLY_MODE_CONTENT,
  READ_ONLY_MODE_V2_CONTENT
} from "./data";

import "./index.scss";

render(
  <BrowserRouter>
    <div id="Wrapper">
      <Route exact path="/">
        <Redirect to="/basic" />
      </Route>
      <Route path="/basic">
        <Tiptap
          content={BASIC_CONTENT}
          withToolbar={true}
          withTaskListExtension={true}
          withLinkExtension={true}
          withEmojisReplacer={true}
        />
      </Route>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
