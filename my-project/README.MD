```
import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

const App = () => {
  const printItem = useRef();
  const d = new Date();
  console.log(d);

  // Format the date and time as per the desired format (example: "July 21, 2023 12:34 PM")
  const formattedDateTime = d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <div className="p-4">
      <div className="w-[633px] h-[806px] bg-gray-200 pt-8 pr-12 pl-2 ">
        <div className="flex justify-end">
          <p className="self-end text-[13px]">বা সে ফ ত-৩৬</p>
        </div>

        <div className="text-center">
          <h1>অনুপযোগী ঘোষণাপত্র</h1>
          <p className="text-[13px]">সামগ্রী/সরঞ্জামের ৫ম শ্রেণী রায় প্রদান</p>
          <p className="text-[13px]">
            [কেবল কারখানার (ওয়ার্কশপের) ব্যবহারের জন্য]
          </p>
        </div>

        <div className="mt-10">
          <p className="text-[13px]">প্রতি,</p>
          <div className="grid grid-cols-2 gap-[80px] pl-8">
            <div>
              <div className="w-full border-t-2 border-b-2 border-black border-dotted">
                <p className="inputFont">149 FD WKSP COY EME</p>
              </div>

              <div className="w-full border-b-2 border-black border-dotted">
                <p className="inputFont">Ramu Cantonment</p>
              </div>

              <div className="mt-10 relative">
                <p className="text-[13px] absolute -top-[15px] -left-8">
                  বরাতঃ আপনাদের কার্যাদেশ/ত্রূটি বিবরনী (নম্বর)
                </p>
                <div className="relative pt-3 ">
                  <div className="flex items-center">
                    <p className=" text-[13px] ">তারিখ</p>
                    <p className="w-full border-t-2 border-black border-dotted"></p>
                  </div>
                  <p className="pl-8 absolute top-[17px] left-2 inputFont ">
                    2023-24/56
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="relative w-full border-t-2 border-black border-dotted">
                <p className="pl-5 inputFont">72101/EME</p>
                <p className="absolute -top-[15px] -left-10 text-[13px]">
                  সংখ্যা
                </p>
              </div>
              <div className="relative w-full border-t-2 border-black border-dotted">
                <p className="pl-5 inputFont">115 Fd Wksp Coy EME</p>
                <p className="absolute -top-[15px] -left-10 text-[13px]">
                  ইউনিট
                </p>
              </div>
              <div className="relative w-full border-t-2 border-black border-dotted">
                <p className="pl-5 inputFont">20-07-2023</p>
                <p className="absolute -top-[15px] -left-10 text-[13px]">
                  তারিখ
                </p>
              </div>
              <div className="relative w-full border-t-2 border-black border-dotted">
                <p className="pl-5 inputFont">2023-24/56</p>
                <p className="absolute -top-[15px] -left-10 text-[13px]">
                  সংখ্যা
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2 mt-3 pl-5">
            <p className="text-[13px]">
              ১। এতদ্বারা ইহা সত্যায়িত করা হইতেছে যে, আপনাদের ইউনিটের নিম্ন
              বর্ণিত সামগ্রী/সামগ্রীসমূহ *ন্যায্য কারণে/*অন্যায় বা অসঙ্গত কারণে
              ক্ষয়প্রাপ্ত হওয়ার দরুন ৫ম শ্রেণী ভুক্ত করা হইয়াছে।
            </p>
            <p className="text-[13px]">
              ১। চলিত নির্দেশাবলী অনুয়ায়ী নিম্নে বর্ণিত সামগ্রীগুলো অর্ডন্যান্স
              ডিপোতে জমা দেওয়ার এবং উহাদের পরিবর্তে নুতন সামগ্রীর চাহিদা
              প্রেরণের জন্য আপনাকে বিধিসঙ্গত ক্ষমতা প্রদান করা হইল।
            </p>
            <p className="text-[13px]">
              ৩। *অনুসন্ধান আদালতের আয়োজন করতে নির্দেশ দেওয়া গেল।
            </p>
          </div>
          <table className="mt-3 w-full text-center">
            <tr className="border-t-[1px] border-b-[1px] border-black text-[13px] ">
              <th className="border-r-[1px] border-black w-[20%]">
                তালিকা নম্বর
              </th>
              <th className="border-r-[1px] border-black w-[30%]">নাম</th>
              <th className="border-r-[1px] border-black w-[10%]">সংখ্যা</th>
              <th className="w-[40%]">রায় দেওয়ার কারণ</th>
            </tr>
            <tr>
              <td className="inputFont">BA No 056370 Pickup HZJ-75</td>
              <td className="inputFont text-left">
                <p className="inputFont">Fuel Injection Pump assy</p>
              </td>
              <td className="inputFont text-center">One</td>
              <td className="inputFont text-left">
                BER Class six. Because its body, bore is unserviceable. (Lawful)
              </td>
            </tr>
          </table>
          <div className="pl-[88px] mt-[170px]">
            <div className="relative w-[150px] border-t-2 border-black border-dotted">
              <p className="pl-5 inputFont">2023-24/56</p>
              <p className="absolute -top-[15px] -left-[75px] text-[13px]">
                কার্য নম্বর
              </p>
            </div>
            <div className="mt-2 relative w-[150px] border-t-2 border-black border-dotted">
              <p className="pl-5 inputFont">102</p>
              <p className="absolute -top-[15px] -left-[75px] text-[13px]">
                ক্রমিক সংখ্যা
              </p>
            </div>
          </div>
          <div className="border border-gray-600"></div>
          <p className="text-[14px]">*অপ্রয়োজনীয় অংশ কাটিয়া দিন।</p>
          <p className="text-[9px] mt-3">
            Printed by: RI&I, 149 Fd Wksp Coy EME, Ramu Cantonment at
            <span className="ml-1">{formattedDateTime}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;

// import React, { useRef } from 'react'
// import ReactToPrint from 'react-to-print'

// const App = () => {
//   const printItem = useRef()
//   return (
//     <div>
//       <div ref={printItem}><h1>Hello</h1></div>
//       <ReactToPrint trigger={()=> <button>Print</button>} content={()=> printItem.current} />
//     </div>
//   )
// }

// export default App

```

```
import React from "react";

const BlrForm = () => {
  const d = new Date();

  // Format the date and time as per the desired format (example: "July 21, 2023 12:34 PM")
  const formattedDateTime = d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <div className="p-4">
      <div className="w-[633px] h-[806px] bg-gray-200 pt-8 pr-12 pl-2 ">
        <div className="flex justify-end">
          <p className="self-end text-[13px]">বা সে ফ ত-৩৬</p>
        </div>

        <div className="text-center">
          <h1>অনুপযোগী ঘোষণাপত্র</h1>
          <p className="text-[13px]">সামগ্রী/সরঞ্জামের ৫ম শ্রেণী রায় প্রদান</p>
          <p className="text-[13px]">
            [কেবল কারখানার (ওয়ার্কশপের) ব্যবহারের জন্য]
          </p>
        </div>

        <div className="mt-10">
          <p className="text-[13px]">প্রতি,</p>
          <div className="grid grid-cols-2 gap-[80px] pl-8">
            <div>
              <div className="w-full border-t-2 border-b-2 border-black border-dotted">
                <p className="inputFont">149 FD WKSP COY EME</p>
              </div>

              <div className="w-full border-b-2 border-black border-dotted">
                <p className="inputFont">Ramu Cantonment</p>
              </div>

              <div className="mt-10 relative">
                <p className="text-[13px] absolute -top-[15px] -left-8">
                  বরাতঃ আপনাদের কার্যাদেশ/ত্রূটি বিবরনী(নম্বর)
                </p>
                <div className="relative pt-3 ">
                  <div className="flex items-center">
                    <p className=" text-[13px] ">তারিখ</p>
                    <p className="w-full border-t-2 border-black border-dotted"></p>
                  </div>
                  <p className="pl-8 absolute top-[17px] left-2 inputFont ">
                    2023-24/56
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="relative w-full border-t-2 border-black border-dotted">
                <p className="pl-5 inputFont">72101/EME</p>
                <p className="absolute -top-[15px] -left-10 text-[13px]">
                  সংখ্যা
                </p>
              </div>
              <div className="relative w-full border-t-2 border-black border-dotted">
                <p className="pl-5 inputFont">115 Fd Wksp Coy EME</p>
                <p className="absolute -top-[15px] -left-10 text-[13px]">
                  ইউনিট
                </p>
              </div>
              <div className="relative w-full border-t-2 border-black border-dotted">
                <p className="pl-5 inputFont">20-07-2023</p>
                <p className="absolute -top-[15px] -left-10 text-[13px]">
                  তারিখ
                </p>
              </div>
              <div className="relative w-full border-t-2 border-black border-dotted">
                <p className="pl-5 inputFont">2023-24/56</p>
                <p className="absolute -top-[15px] -left-10 text-[13px]">
                  সংখ্যা
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2 mt-3 pl-5">
            <p className="text-[13px]">
              ১। এতদ্বারা ইহা সত্যায়িত করা হইতেছে যে, আপনাদের ইউনিটের নিম্ন
              বর্ণিত সামগ্রী/সামগ্রীসমূহ *ন্যায্য কারণে/*অন্যায় বা অসঙ্গত কারণে
              ক্ষয়প্রাপ্ত হওয়ার দরুন ৫ম শ্রেণী ভুক্ত করা হইয়াছে।
            </p>
            <p className="text-[13px]">
              ১। চলিত নির্দেশাবলী অনুয়ায়ী নিম্নে বর্ণিত সামগ্রীগুলো অর্ডন্যান্স
              ডিপোতে জমা দেওয়ার এবং উহাদের পরিবর্তে নুতন সামগ্রীর চাহিদা
              প্রেরণের জন্য আপনাকে বিধিসঙ্গত ক্ষমতা প্রদান করা হইল।
            </p>
            <p className="text-[13px]">
              ৩। *অনুসন্ধান আদালতের আয়োজন করতে নির্দেশ দেওয়া গেল।
            </p>
          </div>
          <table className="mt-3 w-full text-center">
            <tr className="border-t-[1px] border-b-[1px] border-black text-[13px] ">
              <th className="border-r-[1px] border-black w-[20%]">
                তালিকা নম্বর
              </th>
              <th className="border-r-[1px] border-black w-[30%]">নাম</th>
              <th className="border-r-[1px] border-black w-[10%]">সংখ্যা</th>
              <th className="w-[40%]">রায় দেওয়ার কারণ</th>
            </tr>
            <tr>
              <td className="inputFont">BA No 056370 Pickup HZJ-75</td>
              <td className="inputFont text-left">
                <p className="inputFont">Fuel Injection Pump assy</p>
              </td>
              <td className="inputFont text-center">One</td>
              <td className="inputFont text-left">
                BER Class six. Because its body, bore is unserviceable. (Lawful)
              </td>
            </tr>
          </table>
          <div className="pl-[88px] mt-[170px]">
            <div className="relative w-[150px] border-t-2 border-black border-dotted">
              <p className="pl-5 inputFont">2023-24/56</p>
              <p className="absolute -top-[15px] -left-[75px] text-[13px]">
                কার্য নম্বর
              </p>
            </div>
            <div className="mt-2 relative w-[150px] border-t-2 border-black border-dotted">
              <p className="pl-5 inputFont">102</p>
              <p className="absolute -top-[15px] -left-[75px] text-[13px]">
                ক্রমিক সংখ্যা
              </p>
            </div>
          </div>
          <div className="border border-gray-600"></div>
          <p className="text-[14px]">*অপ্রয়োজনীয় অংশ কাটিয়া দিন।</p>
          <p className="text-[9px] mt-3">
            Printed by: RI&I, 149 Fd Wksp Coy EME, Ramu Cantonment at
            <span className="ml-1">{formattedDateTime}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlrForm;

```
