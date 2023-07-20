import React from "react";
import Categories from "./components/Categories";
import RecentBlogs from "./components/RecentBlogs";
import Activity from "./components/Activity";

export default function page() {
  return (
    <div>
      <Activity />
      <Categories />
      <RecentBlogs />
    </div>
  );
}
