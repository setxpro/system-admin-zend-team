import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Button from "@mui/material/Button";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import SearchIcon from "@mui/icons-material/Search";

import * as C from "./styles";
import TextField from "@mui/material/TextField";

const VendasDoFlex = () => {
  const [dataInicial, setDataInicial] = React.useState<Date | null>(new Date());

  const [dataFinal, setDataFinal] = React.useState<Date | null>(new Date());

  const handleDate = () => {
    console.log({
      dataInicial: format(new Date(`${dataInicial}`), "yyyy-MM-dd", {
        locale: ptBR,
      }),
      dataFinal: format(new Date(`${dataFinal}`), "yyyy-MM-dd", {
        locale: ptBR,
      }),
    });
  };
  return (
    <C.Container>
      <C.ContentHeader>
        <div className="date-area">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Data Inicial"
              inputFormat="DD/MM/YYYY"
              value={dataInicial}
              onChange={(date: Date | null) => setDataInicial(date)}
              renderInput={(params) => <TextField {...params} />}
            />
            <DesktopDatePicker
              label="Data Final"
              inputFormat="DD/MM/YYYY"
              value={dataFinal}
              onChange={(date: Date | null) => setDataFinal(date)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button
            variant="contained"
            endIcon={<SearchIcon />}
            onClick={() => handleDate()}
          >
            Buscar
          </Button>
        </div>
        <h1>Vendas Do Flex</h1>
      </C.ContentHeader>
    </C.Container>
  );
};

export default VendasDoFlex;
