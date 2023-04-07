import React, { useState } from "react"
import './App.css';

function App() {

  const [isTrue, setIsTrue] = useState(false)

 const data = [
   {
      mobileName: "iphone",
      models: [
        {
          modelName: "14 pro",
          rating: 4.9
        }
      ],
     oldMobiles: [
      {
        mobileName: "Realme",
        models: [
          {
            modelName: "GT 2",
            rating: 4.7
          }
        ]
      }
     ]
   }
 ]

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Mobile</th>
            <th>Model</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, rowIndex) =>(
            <>

              {/*below code for display the main products in table */}

              {product.models.map((model, itemIndex) =>(
                <>
                <tr key={`${rowIndex}-${itemIndex}`}>
                  {itemIndex === 0 && 
                  <>
                  <td rowSpan={product.models.length}>
                    <button onClick={() => setIsTrue(!isTrue)}>+</button>
                    </td>
                    <td rowSpan={product.models.length}>{product.mobileName}</td>
                    </>
                    }
                  <td>{model.modelName}</td>
                  <td>{model.rating}</td>
                </tr>
                </>
              ))}

              {/* below code for display the other products in table */}

              {isTrue && product.oldMobiles.map((old, rowIndex) =>(
                <>
                  {old.models.map((model, itemIndex) =>(
                    <tr key={`${rowIndex}-${itemIndex}`}>
                      {itemIndex === 0 && 
                      <>
                        <td rowSpan={old.models.length}></td>
                        <td rowSpan={old.models.length}>{old.mobileName}</td>
                        </>
                        }
                      <td>{model.modelName}</td>
                      <td>{model.rating}</td>
                    </tr>
                  ))}
                </>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
