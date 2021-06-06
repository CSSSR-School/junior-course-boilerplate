import React from "react";
import { Item } from "./Item";
import "./styles.css";

const List = ({ children }) => <ul>{children}</ul>;

List.Item = Item;

export { List };
