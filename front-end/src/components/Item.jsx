import React from "react";

const Item = () => {
  return (
    <div className="flex flex-col gap-3">
      <img
        src="https://i.pinimg.com/736x/4e/9e/ad/4e9eadf410ee61e80a03044886228138.jpg"
        alt="imagem da biqueira"
        div
        className="aspect-square rounded-2xl object-cover"
      />
      <div>
        <h3 className="text-2xl font-semibold">
          Biquera do Sagui, Rio de Janeiro
        </h3>
        <p className="truncate text-gray-600">
          Cansado das viagens clichês para praias paradisíacas e pontos
          turísticos lotados? Que tal viver uma experiência radical e 100%
          underground? Na lendária Biqueira do Sagui, você vai conhecer a
          verdadeira adrenalina urbana: vielas com GPS que falha, olhares
          desconfiados em cada esquina, e um tour guiado pelo tiozinho que “já
          viu de tudo nessa vida”.
        </p>
      </div>
      <p>
        <span className="font-semibold">R$: 100</span> por dia
      </p>
    </div>
  );
};

export default Item;
