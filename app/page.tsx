'use client'

import { useEffect, useState } from "react";
import { Howl, Howler } from 'howler'
import { motion } from 'framer-motion'
// import versace from '../public/sound.mp3'


export default function Home() {

  let cats = ["./imgs/1.PNG", "./imgs/3.PNG", "./imgs/5.PNG", "./imgs/2.PNG", "./imgs/4.PNG", "./imgs/6.PNG"]

  let [current, setCurrent] = useState(0)

  let [page, setPage] = useState(0)
  let [key, setKey] = useState('')

  let [loading, setLoading] = useState(false)

  const [modal, setModal] = useState(false)
  const key_define = '02022002'

  const [unlocked, setUnlocked] = useState(false)
  const [ungpao, setUngpao] = useState(false)
  const [receive, setReceive] = useState(false)
  const [openCat, setOpenCat] = useState(false)

  const variants = {
    hidden: { opacity: 0, y: 100, pointerEvents: "none" },
    show: { opacity: 1, y: 0, pointerEvents: "auto" },
  };

  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
    setTimeout(() => {
      setLoad(false)
    }, 9000);
  }, [current == cats.length - 1])


  return (
    <div>
      {page == 0 ? <div className={`w-full h-[80vh] flex justify-center items-center`}>
        <img onClick={() => {
          if (current < cats.length) {
            setCurrent(current + 1)
          }
          if (current == cats.length - 1) {

            var sound = new Howl({
              src: ['./bad.mp3'],
              html5: true,
              // autoplay: true,
              volume: 0.5
            });


            sound.play();
            setPage(1)
          }
        }} className="w-[300px]" src={cats[current]}></img>

        {/* <div className="w-full h-[80px] bg-pink-500">

      </div> */}

        {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <iframe className="rounded-[12px] w-[500px]" src="https://open.spotify.com/embed/track/0kN8xEmgMW9mh7UmDYHlJP?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </motion.div> */}

      </div> : <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>

        <motion.div initial={{ y: 0, opacity: 1 }} animate={!load ? { y: -500, opacity: 0, pointerEvents: 'none' } : { y: 0, opacity: 1 }} className="w-full h-[100vh] fixed top-0 left-0 bg-black/60 z-[6] flex justify-center items-center">
          <p className="font-[medium] text-white">Loading</p>
        </motion.div>

        <div className="w-full h-[110px] bg-[#eaa9a9] flex flex-col justify-center items-center">
          <p className="font-[sbold] text-[24px] text-white">Happy Birthday</p>
          <p className="font-[sbold] text-[24px] text-white">to</p>
          <div className="relative">
            <p className="font-[sbold] text-[24px] text-white">GingGoi [mygf];</p>
            <img className="absolute w-[100px] right-[-6px] top-[-51px]" src="./candle.webp"></img>
            <img className="absolute w-[20px] rotate-[20deg] right-[200px] top-[-38px]" src="./cake.webp"></img>
          </div>

        </div>

        <div className="p-[20px]">
          <iframe className="border-radius:12px w-full" src="https://open.spotify.com/embed/track/2VNpT9fRk1kyksT0S4coZR?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>


          {openCat ? <div className="absolute z-[6] top-0">
            <motion.img initial={{ y: -100 }} animate={{ y: 0 }} onClick={() => {
              setOpenCat(false)
            }} src="./dog.webp"></motion.img>
          </div> : null}

          <div>
            <p className="font-[pmedium] p-[5px] bg-white absolute right-[170px] top-[430px] z-[5] rounded-[8px]">กดหนูสิพี่กิ่งก้อย</p>
            <img onClick={() => {
              // sound.play();
              setOpenCat(true)
            }} className="absolute w-[180px] rotate-[20deg] right-[30px] top-[300px]" src="./cat.webp"></img>
          </div>

          <hr className="border-b-[1px] border-black/30 mt-[20px] mb-[0px]"></hr>

          {/* <motion.div initial={{height: 0}} animate={{height: 173}} transition={{duration: 2}} className="w-full flex justify-center items-center flex-col overflow-hidden">
            <p className="font-[bold]">Turned to 23 years old</p>
            <p className="font-[light]">I hopefully in this year</p>
            <p className="font-[light]">U'll be Happy</p>
            <p className="font-[light]">More Than</p>
            <div className="relative w-full flex justify-center items-center">
              <p className="font-[light]">22</p>
              <img className="w-[100px] absolute top-[-15px] rotate-[180deg]" src="./candle.webp"></img>
            </div>
          </motion.div> */}

          {/* <hr className="border-b-[1px] border-black/30 mt-[20px] mb-[0px]"></hr> */}

          <div>
            <div className="flex justify-start items-center mt-[20px] gap-[10px]">
              <p className="font-[sbold]">Theme University!</p>
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
              </span>
            </div>

            <div className="flex justify-center items-center gap-[20px]">

              <div className="h-[220px] w-[220px] mt-[20px] ">
                <img src="./k2.webp" className="h-full w-full shadow-md object-cover object-bottom rounded-[8px]"></img>
              </div>
              <div>
                <p className="font-[medium] text-[16px]">Graduated</p>
                <p className="font-[light] text-[12px] text-purple-600">CMU SO CUTE</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-[20px]">

              <div>
                <p className="font-[medium] text-[16px]">Graduated</p>
                <p className="font-[light] text-[12px] text-sky-500">Graduation gown</p>
              </div>
              <div className="h-[220px] w-[220px] mt-[20px]">
                <img src="./k1.webp" className="h-full w-full shadow-md object-cover object-bottom rounded-[8px]"></img>
              </div>
            </div>

            <div className="flex justify-center items-center gap-[20px]">
              <div className="h-[220px] w-[400px] mt-[20px]">
                <img src="./k11.webp" className="h-full w-full shadow-md object-cover object-center rounded-[8px]"></img>
              </div>
              <div>
                <p className="font-[medium] text-[16px]">Unintentional</p>
                <p className="font-[light] text-[12px] text-pink-500">had a photo taken by someone else</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-[20px] mt-[10px]">

              <div className="h-[220px] w-full mt-[20px] overflow-hidden rounded-[8px] shadow-lg">
                <img src="./k6.webp" className="h-full w-full shadow-md object-cover object-center rounded-[8px] scale-[1.5]"></img>
              </div>
              <div>
                <div>
                  <p className="font-[medium] text-[16px]">Popular Phrase</p>
                  <p className="font-[light] text-[12px]">All of the time</p>
                </div>
                <hr className="mt-[5px] mb-[5px]" />
                <p className="font-[pregular] text-[14px]">"หมาเด็กต้องคู่กับพี่คนสวย"</p>
                {/* <p className="font-[light] text-[12px] text-sky-500">Graduation gown</p> */}
              </div>
            </div>

            <div className="flex justify-start items-center mt-[20px] gap-[10px]">
              <p className="font-[sbold]">Pets Lover!</p>
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-pink-500"></span>
              </span>
            </div>

            <div className="flex justify-center items-center gap-[20px]">

              <div className="h-[220px] w-[220px] mt-[20px]">
                <img src="./k7.webp" className="h-full w-full shadow-md object-cover object-center rounded-[8px]"></img>
              </div>
              <div>
                <p className="font-[medium] text-[16px]">Crypto Cats</p>
                <p className="font-[light] text-[12px] text-sky-500">At Sanpatong dist</p>
              </div>
            </div>

            <div className="flex justify-end items-center mt-[20px] gap-[10px]">
              <p className="font-[sbold]">SweetDream</p>
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-blue-500"></span>
              </span>
            </div>

            <div className="flex justify-center items-center gap-[20px]">

              <div>
                <p className="font-[medium] text-[16px]">Sleepyhead</p>
                <p className="font-[light] text-[12px] text-blue-500">01 AM</p>
              </div>
              <div className="h-[220px] w-[220px] mt-[20px]">
                <img src="./k9.webp" className="h-full w-full shadow-md object-cover object-center rounded-[8px]"></img>
              </div>
            </div>
            {/* 
            <div className="flex justify-end items-center mt-[20px] gap-[10px]">
              <p className="font-[sbold]">Sexy</p>
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
              </span>
            </div> */}

            <div className="flex justify-center items-center gap-[20px]">

              <div>
                <p className="font-[medium] text-[16px]">Sexy Girl</p>
                <p className="font-[light] text-[12px] text-red-500">she is so hot 🔥</p>
              </div>
              <div className="h-[220px] w-[220px] mt-[20px]">
                <img src="./k12.webp" className="h-full w-full shadow-md object-cover object-center rounded-[8px]"></img>
              </div>
            </div>

            {/* <div className="flex justify-end items-center mt-[20px] gap-[10px]">
              <p className="font-[sbold]">cute</p>
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
              </span>
            </div> */}

            <div className="flex flex-col justify-center items-center">
              <div className="grid grid-cols-2">
                <div className="flex mr-[-50px] z-[2] flex-col justify-center items-center gap-[20px] mt-[20px]">

                  <div className="">
                    <img src="./k8.webp" className="h-full w-full shadow-md object-cover object-center rounded-[8px]"></img>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-[20px] mt-[20px]">

                  <div className="">
                    <img src="./k10.webp" className="h-full w-full shadow-md object-cover object-center rounded-[8px]"></img>
                  </div>
                </div>
              </div>

              <div className="mt-[10px]">
                <p className="font-[medium] text-[16px]">Selfie with a dog</p>
                <p className="font-[light] text-[12px] text-slate-400 text-center">1 mensiversary</p>
              </div>

            </div>



            {/* <div className="flex justify-center items-center mt-[10px]">
              <img className="w-[100px] rotate-[90deg] animate-bounce" src="./arrow.svg"></img>
            </div> */}

            <div className="mt-[30px] grid grid-cols-3 gap-[10px]">
              <div className="">
                <img src="./k5.webp" className="h-full w-full shadow-md object-cover object-center rounded-[8px]"></img>
              </div>
              <div className="">
                <img src="./k13.webp" className="h-full w-full shadow-md object-cover object-center rounded-[8px]"></img>
              </div>
              <div className="">
                <img src="./k10.webp" className="h-full w-full shadow-md object-cover object-center rounded-[8px]"></img>
              </div>
              <div className="">
                <img src="./k3.webp" className="h-full w-full shadow-md object-cover object-center rounded-[8px]"></img>
              </div>
              <div className="">
                <img src="./k15.webp" className="h-full w-full shadow-md object-cover object-center rounded-[8px]"></img>
              </div>
              <div className="">
                <img src="./k16.webp" className="h-full w-full shadow-md object-cover object-center rounded-[8px]"></img>
              </div>
            </div>

            <hr className="border-b-[1px] border-black/30 mt-[20px] mb-[0px]"></hr>


            <div className="flex justify-center items-center mt-[20px] gap-[10px]">
              <p className="font-[sbold]">Gift</p>
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-blue-500"></span>
              </span>
            </div>

            <div className="w-full h-[200px] flex justify-center items-center">
              <img onClick={() => {
                setModal(true)
              }} src="./gift.webp" className="w-[100px] animate-bounce"></img>

            </div>

          </div>

        </div>

        {unlocked ? <div className="w-full h-[100vh] fixed top-0 left-0 bg-black/60 z-[3] flex justify-center items-center">

          {receive ? <div className="absolute flex justify-center items-center z-[6] right-[20px]">
            <img onClick={() => {
              setUnlocked(false)
              setUngpao(false)
              setReceive(false)
            }} className="w-[350px] h-full" src="./500thb.webp"></img>
          </div> : null}

          <motion.img onClick={() => {
            setReceive(true)
          }} initial={{ opacity: 0, y: -100 }} animate={ungpao ? { opacity: 1, y: 0 } : { opacity: 0, y: 100, pointerEvents: 'none' }} transition={{ duration: 1 }} src="./ungpao.webp" className={`absolute ${ungpao ? '' : 'animate-bounce'}`}></motion.img>

          <div className="w-[300px] h-[470px] p-[20px] bg-white rounded-[8px] shadow flex flex-col justify-center items-center">
            <p className="font-[pmedium] text-center">สุขสันต์วันเกิดนะคั้บอ้วนก็โตขึ้นอีกปี</p>
            <hr className="border-b-[1px] w-full border-black/20 mt-[10px] mb-[0px] rounded-full" />
            <p className="font-[plight] text-[15px] mt-[10px] text-start border-b-[1px]">วันเกิดอ้วนปีนี้เค้าขอให้อ้วนมีแต่ความสุข☺️ ขอให้มีความสุขกว่าแต่ก่อนเยอะๆเลยเพราะเค้าอยู่ด้วยเเล้วว🐶 ปีนี้ก็ให้อ้วนใช้ชีวิตให้เต็มที่ เค้าที่เข้ามาในชีวิตอ้วนเค้าก็จะช่วยซัพพอร์ตอ้วนให้ไปข้างหน้าอย่างที่อ้วนได้มุ่งหวังเอาไว้ การเดินทางข้างหน้าของอ้วนอาจจะเหนื่อยอาจจะท้อจนอยากจะล้มเลิก แต่เมื่อไหร่ที่อ้วนเป็นแบบนั้นเค้าจะคอยหาวิธีให้อ้วนออกจากความรู้สึกแบบนั้นให้เร็วที่สุด สุดท้ายนี้ เค้าขอให้อ้วนสุขภาพแข็งแรงนะะ💪🏻 การงานก็ขอให้ก้าวกระโดด🦘ขอให้เงินเข้ากระเป๋าเยอะ💸 และออกน้อยๆนะคั้บบ เค้ารักอ้วนนะคั้บบ🫂💖</p>
            <div className="flex items-center gap-[10px] justify-start w-full mt-[10px]">
              <p className="font-[medium]">Receive Gift </p>
              <button onClick={() => {
                if (unlocked) {
                  setUngpao(true)
                }
              }} className="bg-green-700 text-white p-[5px] rounded-[8px] font-[pmedium]">รับของขวัญ</button>
            </div>
            <button onClick={() => {
              setUnlocked(false)
              setUngpao(false)
              setReceive(false)
            }} className="w-full h-[50px] bg-black rounded-[8px] mt-[10px]"><p className="font-[sbold] text-white">Close</p></button>
          </div>
        </div> : null}

        {modal ? <div className="w-full h-[100vh] fixed top-0 left-0 bg-black/60 z-[3] flex justify-center items-center">
          <div className="w-[300px] h-[300px] p-[20px] bg-white rounded-[8px] shadow flex flex-col justify-center items-center">
            <p className="font-[sregular] text-center mb-[20px] text-[14px]">Need key ( 🔑 ) to unlock the gift</p>
            <input onChange={(e) => {
              setKey(e.target.value)
            }} placeholder="key" className="w-full text-center font-[bold] h-[50px] border-b-[1px] outline-none border-black tracking-widest"></input>
            <button onClick={() => {
              if (key == key_define) {
                alert('Unlocked!')
                setModal(false)
                setUnlocked(true)
              } else {
                alert('key is not correct.')
              }
            }} className="w-full h-[50px] bg-green-700 text-white rounded-[8px] mt-[20px]"><p className="font-[sbold]">Unlock The Gift</p></button>
            <button onClick={() => {
              setModal(false)
            }} className="w-full h-[50px] bg-red-700 text-white rounded-[8px] mt-[10px]"><p className="font-[sbold]">Cancel</p></button>
          </div>
        </div> : null}


      </motion.div>}



    </div>
  );
}
