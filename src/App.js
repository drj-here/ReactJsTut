import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import StyleSheet from './Components/StyleSheet';
import Inline from './Components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './Components/Form';
import LifecycleA from './Components/LifecycleA';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import PortalsDemo from './Components/PortalsDemo';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ClickCounterTwo from './Components/ClickCounterTwo';
import User from './Components/User';
import CounterTwo from './Components/CounterTwo';
import { UserProvider } from './Components/userContext';
import ComponentC from './Components/ComponentC';
import PostList from './Components/PostList';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterFour from './Components/HookCounterFour';
import UseEff from './Components/UseEff';
import ClassMouse from './Components/ClassMouse';
import HookMouse from './Components/HookMouse';
import MouseContainer from './Components/MouseContainer';
import IntervalClassCounter from './Components/IntervalClassCounter';
import IntervalHookCounter from './Components/IntervalHookCounter';
import DataFetching from './Components/DataFetching';
import ReducerCounter from './Components/ReducerCounter';
import ReducerCounterTwo from './Components/ReducerCounterTwo';
import DataFetchingusingReducer from './Components/DataFetchingusingReducer';
import UseMemoCounter from './Components/UseMemoCounter';
import FocusInputusingUseRef from './Components/FocusInputusingUseRef';
import HookTimer from './Components/HookTimer';
import UseState from './Components/UseState/UseState';
import { ObjectUseStaterender } from './Components/Object UseState/ObjectUseStaterender';
import { Parent } from './Components/Optimisaton/Parent';
import { Child } from './Components/Optimisaton/Child';
function App() {
  return (
    <div className="App">
      <Parent>
        <Child/>
      </Parent>
      {/* <ObjectUseStaterender/> */}
      {/* <UseState/> */}
      {/* <HookTimer/> */}
      {/* <FocusInputusingUseRef/> */}
      {/* <UseMemoCounter/> */}
      {/* <DataFetchingusingReducer/> */}
      {/* <ReducerCounterTwo/> */}
      {/* <ReducerCounter/> */}
      {/* <DataFetching/> */}
      {/* <IntervalHookCounter/> */}
      {/* <IntervalClassCounter/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <UseEff/> */}
      {/* <PostList/> */}
          {/* <HookCounter/> */}
          {/* <HookCounterTwo/> */}
          {/* <HookCounterThree/> */}
          {/* <HookCounterFour/> */}
      {/* <UserProvider value='drj'> */}
        {/* <ComponentC/> */}
      {/* </UserProvider> */}
      {/* <CounterTwo render={(count,incrementCount)=>(
        <ClickCounterTwo count={count} incrementCount={incrementCount}/>
      )}/> */}
      {/* <ClickCounter/> */}
      {/* <User render={(isLoggedIn)=>isLoggedIn?'Vishwas':'Guest'}/> */}
      {/* <ClickCounterTwo/> */}
      {/* <HoverCounter name='Dishu'/> */}
      {/* we need to wrap error boundary around each component so that the genuine ones are not lost  */}
      {/* <ErrorBoundary>
      <Hero heroName='Batman'/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName='Joker'/>
      </ErrorBoundary> */}
      {/* <PortalsDemo/> */}
      {/* <FocusInput/> */}
      {/* <RefsDemo/> */}
      {/* <ParentComp/> */}
      {/* <Table/> */}
      {/* <FragmentDemo/> */}
      {/* <LifecycleA/> */}
      {/* <Form/> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Welcome name="Shiv" nickName="dishu"/>
      <Greet name="Sunny"> <p>i am the children props</p></Greet> */}
      {/* <Hello/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
      {/* <StyleSheet primary={true}/> */}
      {/* <Inline/> */}
    </div>
  );
}

export default App;
