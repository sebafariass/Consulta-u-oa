
// Arreglos  

let radiologia = [
    {// Info de pacientes agendados seccion radiologia
      hora: "11:00",
      especialista: "FEDERICO SUBERCASEAUX",
      paciente: "PAMELA ESTRADA",
      rut: "15345241-3",
      prevision: "ISAPRE" // primer paciente  Radiologia
    },
    {
      hora: "11:30",
      especialista: "IGNACIO SCHULZ",
      paciente: "FRANCISCA ROJAS",
      rut: "9878782-1",
      prevision: "ISAPRE"
    },
    {
      hora: "15:00",
      especialista: "FERNANDO WURTHZ",
      paciente: "ARMANDO LUNA",
      rut: "16445345-9",
      prevision: "ISAPRE"
    },
    {
      hora: "15:30",
      especialista: "ANA MARIA GODOY",
      paciente: "MANUEL GODOY",
      rut: "17666419-0",
      prevision: "FONASA"
    },
    {
      hora: "16:00",
      especialista: "PATRICIA SUAZO",
      paciente: "RAMON ULLOA",
      rut: "14989389-K",
      prevision: "FONASA"  // último paciente  Radiologia
    }
  ];
  let radioConsulta = radiologia.length;





  
  let traumatologia = [
    {// Info de pacientes agendados seccion Traumatologia
      hora: "08:00am",
      especialista: "Maria Paz Altuzurra",
      paciente: "PAULA SANCHEZ",
       rut: "15554774-5", 
      prevision: "FONASA" // primer paciente  Traumatologia
    },
    {
      hora: "10:00am",
      especialista: "Raul Araya",
      paciente: "ANGÉLICA NAVAS",
       rut: "15444147-9",
      prevision: "ISAPRE"
    },
    {
      hora: "10:30am",
      especialista: "Maria Arriagada",
      paciente: "ANA KLAPP",
       rut: "17879423-9",
      prevision: "ISAPRE"
    },
    {
      hora: "11:00am",
      especialista: "Alejandro Badilla",
      paciente: "FELIPE MARDONES",
       rut: "1547423-6",
      prevision: "ISAPRE"
    },
    {
      hora: "11:30am",
      especialista: "Cecilia Budnik",
      paciente: "DIEGO MARRE",
       rut: "16554741-K",
      prevision: "FONASA"
    },
    {
      hora: "12:00pm",
      especialista: "Arturo Cavagnaro",
      paciente: "CECILIA MENDEZ",
       rut: "9747535-8",
      prevision: "ISAPRE"
    },
    {
      hora: "12:30pm",
      especialista: "Andres Kanacri",
      paciente: "MARCIAL SUAZO",
       rut: "11254785-5",
      prevision: "ISAPRE"  // último paciente  Traumatologia
    }
  ];
  let traumaConsulta = traumatologia.length;


  let dental = [
    {// Info de pacientes agendados seccion Odontologia - Dental 
      hora: "8:30",
      especialista: "Andrea Zuñiga",
      paciente: "Marcela Retamal",
      rut: "11123425-6",
      prevision: "ISAPRE" // primer paciente  odontologia - Dental 
    },
    {
      hora: "11:00",
      especialista: "Maria Pia Zañartu",
      paciente: "Angel Muñoz",
      rut: "0878789-2",
      prevision: "ISAPRE"
    },
    {
      hora: "11:30",
      especialista: "Scarlett Witting",
      paciente: "Mario Kast",
      rut: "7998789-5",
      prevision: "FONASA"
    },
    {
      hora: "13:00",
      especialista: "Francisco Von Teuber",
      paciente: "Karin Fernández",
      rut: "18887662-k",
      prevision: "FONASA"
    },
    {
      hora: "13:30",
      especialista: "Eduardo Viñela",
      paciente: "Hugo Sanchez",
      rut: "17665461-4",
      prevision: "FONASA"
    },
    {
      hora: "14:00",
      especialista: "Raquel Villaseca",
      paciente: "Ana Sepulveda",
      rut: "17665461-4",
      prevision: "ISAPRE"   // último paciente  odontologia - Dental 
    }
  ];
  let dentalConsulta = dental.length;



  // Titulo horas Solicitadas
  document.write("<h3>Horas Agendadas </h3>")  
  


//Cantidad de consultas solicitadas Radiologia
  
  document.write(
    `Cantidad de consultas para radiología: ${radioConsulta} </br>`
  );

  //Cantidad de consultas solicitadas Odontologia - Dental
  document.write(
    `Cantidad de consultas para dental: ${dentalConsulta} </br>`
  );

  //Cantidad de consultas solicitadas Traumatologia
  document.write(
    `Cantidad de consultas para traumatología: ${traumaConsulta} </br>`
  );


//Titulo Horas de Radiologia
  document.write("<h3>Horas de Radiologia </h3>") 


// Primer y última consulta de RADIOLOGIA PACIENTE 
  document.write(
    `Nombre Primer Paciente ${radiologia[0].paciente} - 
     Hora De Atención  : ${radiologia[0].hora} -
     Cobertura Previsional : ${  radiologia[0].prevision} |
     Rut : ${radiologia[0].rut} </br>

     Nombre Último paciente ${radiologia[radioConsulta - 1].paciente} - 
     Hora De Atención  : ${radiologia[radioConsulta -1].hora} -
     Cobertura Previsional : ${ radiologia[radioConsulta - 1].prevision}  |
     Rut : ${radiologia[radioConsulta - 1].rut}

     <br />`
  );


//Horas dentales solicitadas
document.write("<h3>Horas Dentales </h3>")


// Primer y última consulta de Odontologia - Dental PACIENTE 
  document.write(
    
     `Nombre Primer Paciente : ${dental[0].paciente} -
      Hora De Atención  : ${dental[0].hora} -
      Cobertura Previsional :  ${ dental[0].prevision  } |
      Rut : ${dental[0].rut} </br>

       Nombre Último paciente : ${ dental[dentalConsulta - 1].paciente} -
       Hora De Atención  : ${dental[dentalConsulta -1].hora} -
       Cobertura Previsional : ${ dental[dentalConsulta - 1].prevision} |
       Rut : ${dental[dentalConsulta - 1].rut}
    <br/>`
  );


//Horas para Traumatologo solicitadas
  document.write("<h3>Horas de Traumatologia </h3>")
// Primer y última consulta de Traumatologo PACIENTE 
  document.write(
    `Nombre Primer Paciente : ${traumatologia[0].paciente} -
     Hora De Atención  : ${traumatologia[0].hora} -
     Cobertura Previsional : ${ traumatologia[0].prevision} |
     Rut : ${ traumatologia[0].rut} </br>
     
     Nombre Último Paciente : ${traumatologia[traumaConsulta - 1].paciente} -
     Hora De Atención  : ${traumatologia[traumaConsulta - 1].hora} -
     Cobertura Previsional : ${  traumatologia[traumaConsulta - 1].prevision }  |
     Rut : ${traumatologia[traumaConsulta - 1].rut}
      <br />`
  );