import axios from "axios";

export function getClientById2(id) {
  //   setLoading(true);
  axios
    .get(`http://localhost:4000/clientes/${id}`)
    .then((res) => {
      console.log("[getClientById():]" + JSON.stringify(res.data, null, 4));
      //   setLoading(false);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      //   setLoading(false);
    });
}
