import HeaderComponent from './components/header'
import BodyComponent from './components/body'
import "./App.css";
/** Application Layout
 * Header
 *  - logo
 *  - nav items
 * Body
 *  - search bar
 *  - restaurant List
 *    - restaurant card
 *      - Image
 *      - name
 *      - rating
 *      - price
 * Footer
 *  - links
 *
 * @returns
 */

function App() {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
    </>
  );
}

export default App;

/**
 *
 *   // virtual DOM - reconciliation (diff algorithm - ( no key < index key < unique Key) )
 * 
 * 
 * 
 *   <ul id ="list">
 *    <li key="id">1</li>
 *    <li>2</li>
 *    <li>3</li>
 *    <li>4</li>
 *    <li>5</li>
 *    <li>6</li>
 * <li key="99"></li>
 *   </ul>
 * 
 * 
 * <div>
 * <span>
 * <a >
 *
 *
 * https://reactjs.org/docs/lists-and-keys.html#keys
 *
 *  2 types of imports 
 *  
 * 
 * 1. default import 
 * 2. named imports
 *
 * 
 * 
 * 
 * 
 */
