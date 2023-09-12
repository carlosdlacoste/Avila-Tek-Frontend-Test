import React from 'react';

export const Carousel = () => {
  return(
    <>
      <div className='relative'>
        <img className='w-full h-[580px]' src="https://s3-alpha-sig.figma.com/img/58d1/0592/4b448cbf08a29d9f4f2b3eff05b37f8e?Expires=1695600000&Signature=EuZ-wiLvviWlsmrP~acYn3PU6wcc7JazsTdu8wE5boGZnYzag6AXqE1hE9oiYeyIYWJq7c11LhWK~x04kLw-IraImwjv5EUVmJDry~EXQYdOCMpdCoapXPOQ9eUOclgAPD-RvbwJCugsAYSRbVXlCFhyB-f97zXkx52Czkfo5NU-0UXI9Qz709EOJD~uHgBSBlbly5nOKG2MpYmIyaUYTu2ZBPhSvDfhknfavnhVkqEZnkQwWdrQlC6RupNZRShzMXVyro6MVaAgcf0mHGpgkRN6KYpR~7Yf4w~67ojJe4MIpPzejTFSTch-mIkyNuwis-AtlO5G5rSohT52xb5GLg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
        <div className='bg-[#DAD6D3] w-[50px] h-[6px] absolute inset-x-[44%] bottom-6'></div>
        <div className='bg-[#E2081E] w-[50px] h-[6px] absolute inset-x-[48%] bottom-6'></div>
        <div className='bg-[#DAD6D3] w-[50px] h-[6px] absolute inset-x-[52%] bottom-6'></div>
        <div className='bg-[#DAD6D3] w-[50px] h-[6px] absolute inset-x-[56%] bottom-6'></div>
      </div>

    </>
  );
};
