import logo from './logo.svg';
import './App.css';
import Patil from './Components/patil';
import Welcome from './Components/welcome';
import Hello from './Components/Hello'; // With JSX
import House_Stark from './Components/PropsExample';
import Message from './Components/Message';
import Counter from './Components/Count';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import Stylesheet from './Components/Stylesheet';
import Line from './Components/Line';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './Components/Form';
import Exam from './Components/Exam';
import LifeCycleA from './Components/LifeCycleA';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import PureComp from './Components/PureComp';
import ParentComp from './Components/ParentComp';
import RefComp from './Components/RefComp';
import FocusInput from './Components/FocusInput';
import FRParentInput from './Components/FRParentInput';
import PortalDemo from './Components/PortalDemo';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import User from './Components/User';
import IncCounting from './Components/IncCounting';
import ComponentC from './Components/ComponentC';
import { UserProvider } from './Components/userContext';


function App() {
  return (
    <div className="App">

    {/* <UserProvider value = "Satish" >
         <ComponentC/>
    </UserProvider> */}

     {/* <IncCounting
       render={(count,incrementCounter)=>(
          <ClickCounterTwo count={count} incrementCounter={incrementCounter}/>
       )}
     /> */}

     {/* <IncCounting
        render={(count,incrementCounter)=>(
          <HoverCounterTwo count={count} incrementCounter={incrementCounter} /> 
        )}
     /> */}

      {/* <ClickCounterTwo />
      <HoverCounterTwo/> */}
      {/* <User render={(isLoggedIn)=>isLoggedIn?'Satish':'Guest'}/> */}

      {/* <ClickCounter name='Satish'/> 
      <HoverCounter/> */}

      {/* <PortalDemo/> */}
      {/* <FRParentInput/> */}
      {/* <FocusInput/> */}
      {/* <RefComp/> */}
      
      
      <ParentComp/>
      <PureComp/>


     {/* <Table/> */}
      {/* <FragmentDemo/> */}
      {/* <LifeCycleA/> */}
      {/* <Form /> */}
       {/* <Exam /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
       {/* <Patil/> */}
       {/* <Hello/> */}

       {/* <Welcome name = "Arya" famousName="Facelessman"/>
       <Welcome name = "Robb" famousName="Young Wolf"/>
       <Welcome name = "Jon" famousName="White Wolf"/> */}

       {/* <House_Stark name = "Arya" famousName="Facelessman">
          <p> This are Children Of props</p>
       </House_Stark>
       <House_Stark name = "Sansa" famousName="Queen in North"> 
       <button> Ask me</button>
       </House_Stark>
       <House_Stark name = "Robb" famousName="Young Wolf"/>
       <House_Stark name = "Jon" famousName="White Wolf"/>
       <House_Stark name = "Brandon" famousName="King Of 7 Kingdom"/>
       <House_Stark name = "Rikon" famousName="Zig Zag Man"/> */}

      {/* <Message /> */}
      {/* <Counter /> */}

      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind />  */}
       {/* <ParentComponent/>  */}

       {/* <UserGreeting /> */}

       {/* <NameList /> */}
       {/* <Stylesheet primary = {true}/> */}
       {/* <Line /> */}
    </div>
  );
}

export default App;
