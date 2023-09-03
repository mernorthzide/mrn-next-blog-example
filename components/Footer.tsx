import React from "react";

function Footer() {
  return (
    <div className="w-full bg-primary">
      <div className="w-[1000px] mx-auto">
        <div className="w-full flex py-[24px] gap-[20px]">
          {/* Section 1 */}
          <div className="w-1/4 text-white flex flex-col gap-[8px]">
            <div className="text-[20px] mb-[10px]">Section 1</div>

            <div className="hover:underline">Link 1</div>
            <div className="hover:underline">Link 2</div>
            <div className="hover:underline">Link 3</div>
            <div className="hover:underline">Link 4</div>
            <div className="hover:underline">Link 5</div>
          </div>
          {/* Section 2 */}
          <div className="w-1/4 text-white flex flex-col gap-[8px]">
            <div className="text-[20px] mb-[10px]">Section 2</div>

            <div className="hover:underline">Link 1</div>
            <div className="hover:underline">Link 2</div>
            <div className="hover:underline">Link 3</div>
            <div className="hover:underline">Link 4</div>
            <div className="hover:underline">Link 5</div>
          </div>
          {/* Section 3 */}
          <div className="w-1/4 text-white flex flex-col gap-[8px]">
            <div className="text-[20px] mb-[10px]">Section 3</div>

            <div className="hover:underline">Link 1</div>
            <div className="hover:underline">Link 2</div>
            <div className="hover:underline">Link 3</div>
            <div className="hover:underline">Link 4</div>
            <div className="hover:underline">Link 5</div>
          </div>
          {/* Section 4 */}
          <div className="w-1/4 text-white flex flex-col gap-[8px]">
            <div className="text-[20px] mb-[10px]">Section 4</div>

            <div className="hover:underline">Link 1</div>
            <div className="hover:underline">Link 2</div>
            <div className="hover:underline">Link 3</div>
            <div className="hover:underline">Link 4</div>
            <div className="hover:underline">Link 5</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
