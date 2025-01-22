import React, { useState } from "react";
import NoutBrends from "./Nout";


const NoutsArray = [
  {
    NoutId: 1,
    Бренд: "Asus",
    Серия: "Tuf Gaming A15",
    Категория: "для игр и продакшена",
    Процессор: "AMD Ryzen 7",
    оперативнойПамяти: "8 GB",
    МодельВидеоадаптера: "RTX 4060 8GB",
    ОперационнаяСистема: " Без OC",
    ТипОбем: "SSD 512GB",
    Диагональ: "15,6 - 39,62 см ",
    Модель: "7435HS",
    Цвет: "Черный",
    img: 'https://enter.kg/images/stories/virtuemart/product/1_5961_2754.jpg'
   

  },
  {
    NoutId: 2,
    Бренд: "Asus",
    Серия: "ROG STRIX F15",
    Категория: "для игр и продакшена",
    Процессор: "AMD Ryzen 9",
    оперативнойПамяти: "16 GB",
    МодельВидеоадаптера: "RTX 4060 8GB",
    ОперационнаяСистема: " Без OC",
    ТипОбем: "SSD 1TB",
    Диагональ: "15,6 - 39,62 см ",
    Модель: "7445HS",
    Цвет: "Черный",
    img: "https://www.reliancedigital.in/wp-content/uploads/2023/07/Asus_ROG_Scar_G18_Cover_2.jpg"

  },
  {
    NoutId: 3,
    Бренд: "ACER",
    Серия: "NITRO 5",
    Категория: "для игр и продакшена",
    Процессор: "AMD Ryzen 7",
    оперативнойПамяти: "32GB",
    МодельВидеоадаптера: "RTX 4080 12GB",
    ОперационнаяСистема: " Без OC",
    ТипОбем: "SSD 1TBGB",
    Диагональ: "15,6 - 39,62 см ",
    Модель: "7235HS",
    Цвет: "Черный",
    img: "https://content2.rozetka.com.ua/rich_content/rich_content_files/original/294269671.jpg"
  },
  {
    NoutId: 4,
    Бренд: "ACER",
    Серия: "NITRO 5",
    Категория: "для игр и продакшена",
    Процессор: "AMD Ryzen 5",
    оперативнойПамяти: "8 GB",
    МодельВидеоадаптера: "RTX 3050 8GB",
    ОперационнаяСистема: " Без OC",
    ТипОбем: "SSD 512GB",
    Диагональ: "15,6 - 39,62 см ",
    Модель: "7435HS",
    Цвет: "Черный",
    img: "https://content1.rozetka.com.ua/rich_content/rich_content_files/original/355212925.jpg"
  },
  {
    NoutId: 5,
    Бренд: "Asus",
    Серия: " Vivibook",
    Категория: "Для работа и учебы",
    Процессор: "intel Core i5",
    оперативнойПамяти: "8 GB",
    МодельВидеоадаптера: "UHD Graphics",
    ОперационнаяСистема: " Без OC",
    ТипОбем: "SSD 512GB",
    Диагональ: "15,6 - 39,62 см ",
    Модель: "7435HS",
    Цвет: "Серый",
    img: "https://habrastorage.org/getpro/habr/upload_files/5df/a40/d98/5dfa40d98c726ae153fa5e9b043d311d.jpg"
  },
  {
    NoutId: 6,
    Бренд: "ASER",
    Серия: "Aspire Lite",
    Категория: "для работа и учебы",
    Процессор: " intel Core i5",
    оперативнойПамяти: "8 GB",
    МодельВидеоадаптера: "INTEGRATED",
    ОперационнаяСистема: " Без OC",
    ТипОбем: "SSD 512GB",
    Диагональ: "16-40,64",
    Модель: "1235U",
    Цвет: "Серый",
    img: "https://softech.kg/image/catalog/Products/Notebook/Acer/Aspire%20Lite/7.jpg"
  },
  {
    NoutId: 7,
    Бренд: "Asus",
    Серия: "ZenBook 14 UM3402",
    Категория: "Ультрабуки",
    Процессор: "AMD Ryzen 5",
    оперативнойПамяти: "8 GB",
    МодельВидеоадаптера: "Randeon Graphics",
    ОперационнаяСистема: " Без OC",
    ТипОбем: "SSD 512GB",
    Диагональ: "14 - 35,56 см ",
    Модель: "743OU",
    Цвет: "Черный",
    img: "https://www.notebookcheck-ru.com/fileadmin/_processed_/e/c/csm_Asus-has-launched-the-Zenbook-14-UM3406KA_0c2dad8ca2.jpg"
  },
  {
    NoutId: 8,
    Бренд: "MSI",
    Серия: "MSI Vector ",
    Категория: "для игр и продакшена",
    Процессор: "AMD Ryzen 9",
    оперативнойПамяти: "8 GB",
    МодельВидеоадаптера: "RTX 4080 14GB",
    ОперационнаяСистема: " Без OC",
    ТипОбем: "SSD 1TB",
    Диагональ: "15,6 - 39,62 см ",
    Модель: "7435HS",
    Цвет: "Черный",
    img: "https://www.tech-hangout.com/wp-content/uploads/2024/05/LINE_ALBUM_MSI-Vector-16-HX_%E0%B9%92%E0%B9%94%E0%B9%90%E0%B9%95%E0%B9%90%E0%B9%97_7-1.jpg"
  },

  {
    NoutId: 9,
    Бренд: "Lenovo",
    Серия: " LOQ 3 Series",
    Категория: "для работа и учебы",
    Процессор: "AMD Ryzen 5",
    оперативнойПамяти: "8 GB",
    МодельВидеоадаптера: "UHD Graphics",
    ОперационнаяСистема: " Без OC",
    ТипОбем: "SSD 128GB",
    Диагональ: "15,6  ",
    Модель: "132S",
    Цвет: "Серый",
    img: "https://news.lenovo.com/wp-content/uploads/2023/03/11_B_Lenovo_LOQ_15IRH8_Closeup_Port.jpg"
  },
  {
    NoutId: 10,
    Бренд: "HUAWEI",
    Серия: "MateBook D16",
    Категория: "Ультрабуки",
    Процессор: "intel Core 5",
    оперативнойПамяти: "8 GB",
    МодельВидеоадаптера: "UHD Graphics",
    ОперационнаяСистема: "Без OC",
    ТипОбем: "SSD 512GB",
    Диагональ: "16 - 40,64 см ",
    Модель: "12405",
    Цвет: "Синий",
    img: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/pc/matebook-14-2021-new/images/img/huawei-matebook-14-2021-kv.png"
  },
];

const TodoList = () => {
  const [todos, setTodos] = useState(NoutsArray);
  const [NoutBrend, setNoutBrand] = useState("");
  const [seriaNout, setSeriaNout] = useState("");
  const [kategoriya, setKategoriya] = useState("");
  const [prosesor, setProsesor] = useState("");
  const [pamiyt, setPamiyt] = useState("");
  const [modelVideokart, setModelVideokart] = useState("");
  const [sistema, setSistema] = useState("");
  const [tip, setTip] = useState("");
  const [dioganal, setDioganal] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [img, setImg] = useState('')

  // console.log(inputValue);
  console.log(todos);

  const changeImgInputValue = (event) => {
    setImg(event.target.value)
  } 

  const changeInputHandler1 = (event) => {
    setNoutBrand(event.target.value);
  };
  const changeInputHandler2 = (event) => {
    setSeriaNout(event.target.value);
  };
  const changeInputHandler3 = (event) => {
    setKategoriya(event.target.value);
  };
  const changeInputHandler4 = (event) => {
    setProsesor(event.target.value);
  };
  const changeInputHandler5 = (event) => {
    setPamiyt(event.target.value);
  };
  const changeInputHandler6 = (event) => {
    setModelVideokart(event.target.value);
  };
  const changeInputHandler7 = (event) => {
    setSistema(event.target.value);
  };
  const changeInputHandler8 = (event) => {
    setTip(event.target.value);
  };
  const changeInputHandler9 = (event) => {
    setDioganal(event.target.value);
  };
  const changeInputHandler10 = (event) => {
    setModel(event.target.value);
  };
  const changeInputHandler11 = (event) => {
    setColor(event.target.value);
  };


  const clickButtonHandler = () => {
    const newNoutbook = {
      NoutId: Math.random(),
      Бренд: NoutBrend,
      Серия: seriaNout,
      Категория: kategoriya,
      Процессор: prosesor,
      оперативнойПамяти: pamiyt,
      МодельВидеоадаптера: modelVideokart,
      ОперационнаяСистема: sistema,
      ТипОбем: tip,
      Диагональ: dioganal,
      Модель: model,
      Цвет: color,
      img: img,
    };
    setTodos([...todos, newNoutbook]);
    setNoutBrand("")
    setSeriaNout("")
    setKategoriya("")
    setProsesor("")
    setPamiyt("")
    setModelVideokart("")
    setSistema("")
    setTip("")
    setDioganal("")
    setModel("")
    setColor("")


   
  };

  const deleteHandler = (id) => {
    console.log(id);
    const filteredTodos = todos.filter((el) => el.NoutId !== id);
    setTodos(filteredTodos);
    console.log(filteredTodos);
  };

  const resetHandler = () => {
    setTodos([]);
  };

  return (
    <div>
      <div className="globaldiv1">
      <div className="div2">
      <input value={img} onChange={changeImgInputValue} type="text" placeholder="img:" />
      <input value={NoutBrend} onChange={changeInputHandler1} type="text" placeholder=" name:" />
      <input value={seriaNout} onChange={changeInputHandler2} type="text" placeholder=" series:" />
      <input value={kategoriya} onChange={changeInputHandler3} type="text" placeholder="kategoriya:" />
      <input value={prosesor} onChange={changeInputHandler4} type="text"  placeholder="prosesor:"/>
      <input value={pamiyt} onChange={changeInputHandler5} type="text" placeholder="pamit:"/>
      </div>
      <div className="div3">
      <input value={modelVideokart} onChange={changeInputHandler6}type="text" placeholder="vidoecard:"/>
      <input value={sistema} onChange={changeInputHandler7} type="text" placeholder="sistema:" />
      <input value={tip} onChange={changeInputHandler8} type="text" placeholder="tip:" />
      <input value={dioganal} onChange={changeInputHandler9} type="text" placeholder="dioganal:"/>
      <input value={model} onChange={changeInputHandler10} type="text" placeholder="model:"/>
      <input value={color} onChange={changeInputHandler11} type="text" placeholder="color:"/>
      </div>
      </div>

      <button onClick={clickButtonHandler}>Add todo</button>
      <button onClick={resetHandler}>Сброс данных</button>
      <NoutBrends onDelete={deleteHandler} onTodos={todos} />
     
    </div>
  );
};

export default TodoList;
