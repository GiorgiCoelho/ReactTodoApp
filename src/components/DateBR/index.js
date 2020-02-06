import React from "react";
import { format } from "date-fns";
import { pt } from "date-fns/locale";

const formattedDate = format(
  new Date(),
  "'Dia' dd 'de' MMMM' de 'yyyy'",
  { locale: pt }
);

const DateBR = () => <span>{formattedDate}</span>;

export default DateBR;
