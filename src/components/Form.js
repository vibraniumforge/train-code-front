import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";

const Form = () => {
  const [input, setInput] = useState("MNPPD");
  const [isSearched, setIsSearched] = useState(false);

  const { getTrain } = useContext(GlobalContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(input);

    getTrain(input.toUpperCase());
    setIsSearched(true);
    setInput("");
  };

  return (
    <div className="form">
      <h1>Train Code Finder</h1>
      <div>
        <form onSubmit={(e) => handleOnSubmit(e)}>
          <input
            type="text"
            placeholder="Enter code here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input type="submit" value="Submit" disabled={input.length < 4} />
        </form>
      </div>
    </div>
  );
};

export default Form;

// onChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value.toUpperCase(),
//       isSearched: this.state.input.length > 4 ? true : false,
//     });
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     this.setState({ data: "" });
//     if (this.state.input && this.state.input.length >= 4) {
//       fetch(`${url}/${this.state.input}`)
//         .then((res) => res.json())
//         .then((res) => {
//           console.log(res);
//           return res;
//         })
//         .then((res) =>
//           this.setState({ data: res, input: "", isSearched: true })
//         )
//         .catch((err) => console.log(err));
//     }
//   };

//   render() {
//     const notice =
//       this.state.isSearched && this.state.data.length === 0
//         ? "No matching trains found"
//         : null;

//     const train =
//       this.state.data.length > 0 && this.state.isSearched
//         ? this.state.data.map((train, index) => {
//             return (
//               <div key={index}>
//                 <p>Railroad: {train.railroad}</p>
//                 <p>Symbol: {train.symbol}</p>
//                 <p>Origin: {train.origin}</p>
//                 <p>Destination: {train.destination}</p>
//                 <p>Frequency: {train.frequency}</p>
//                 <p>Description: {train.description}</p>
//                 <p>Notes: {train.notes}</p>
//               </div>
//             );
//           })
//         : null;
//     return (
//       <>
//         <div className="App">
//           <h1>Train Info</h1>
//           <h1>Train Code Finder</h1>
//           <div>
//             {/* <Form input={this.state.input} /> */}
//             <form onSubmit={(e) => this.onSubmit(e)}>
//               <input
//                 type="text"
//                 name="input"
//                 placeholder="Enter code here"
//                 value={this.state.input}
//                 onChange={(e) => this.onChange(e)}
//               />
//               <input
//                 type="submit"
//                 value="Submit"
//                 disabled={this.state.input.length < 4}
//               />
//             </form>
//           </div>
//           <div>
//             <br />
//             {train}
//             {/* {this.state.isSearched && train && train.length === 0
//               ? "Sorry no matching train"
//               : null}{" "} */}
//             <br />
//             {notice}
//           </div>
//         </div>
//       </>
//     );
//   }

// export default App;

// import React, { useState } from "react";
// // import Form from "./Form.js";
// import "./App.css";

// function App() {
//   const [input, setInput] = useState("");
//   const [data, setData] = useState(null);
//   const [isSearched, setIsSearched] = useState(false);

//   const url = " http://localhost:3001/api/v1/get_train_by_symbol";

//   async function handleOnSubmit(e) {
//     e.preventDefault();
//     setData("");

//     if (input && input.length > 4) {
//       try {
//         const result = await fetch(`${url}/${input}`);
//         const data = await result.json();
//         setData(data);
//         setIsSearched(true);
//         setInput("");
//       } catch (error) {
//         console.error(error);
//       } finally {
//         console.log(data);
//       }
//     }
//   }

//   const handleOnChange = (e) => {
//     setInput(e.target.value.toUpperCase());
//   };

//   const train =
//     data && data.length > 0
//       ? data.map((train, index) => {
//           return (
//             <div key={index}>
//               <p>Railroad: {train.railroad}</p>
//               <p>Symbol: {train.symbol}</p>
//               <p>Origin: {train.origin}</p>
//               <p>Destination: {train.destination}</p>
//               <p>Frequency: {train.frequency}</p>
//               <p>Description: {train.description}</p>
//               <p>Notes: {train.notes}</p>
//             </div>
//           );
//         })
//       : null;

//   return (
//     <>
//       <div className="App">
//         <h1>Train Code Finer</h1>
//         <div>
//           <form onSubmit={(e) => handleOnSubmit(e)}>
//             <input
//               type="text"
//               placeholder="Enter train code..."
//               value={input}
//               onChange={handleOnChange}
//             />
//             <input type="submit" value="Submit" disabled={input.length < 4} />
//           </form>
//         </div>
//         <div>
//           {train}
//           {isSearched && train && train.length === 0
//             ? "Sorry no matching train"
//             : null}
//           {isSearched && !train ? "Sorry no matching train" : null}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
