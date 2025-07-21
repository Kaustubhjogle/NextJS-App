import React from "react";

const BlogPage = async (props) => {
  const blogParamData = await props.params;
  console.log(blogParamData.slug);

  //http://localhost:3000/blog/tech/android/samsung

  return (
    <div>
      BlogPage
      <div>
        {blogParamData.slug && (
          <div>
            You are viewing Blog with the following Topic:
            {blogParamData.slug.map((item) => {
              return item + "  ";
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
