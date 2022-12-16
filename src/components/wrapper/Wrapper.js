import React from "react";

function Wrapper(props) {
  return (
    <div class="content">
      <div class="intro-y flex items-center mt-8">
        <h2 class="text-lg font-medium mr-auto"></h2>
      </div>
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 lg:col-span-4 2xl:col-span-3 flex lg:block flex-col-reverse">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
