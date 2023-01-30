React Life Cycle

                     LifeCycle Methods (Lifecycle Methods can only be used in class components)
  1.Initialization (NA)
  2.Mounting (componentWillMount() -> render() -> componentDidMount())
  3.Updating ((componentWillReceiveProps(newProps), setState()) -> shouldComponentUpdate(newProps, newState) -> componentWillUpdate() -> render() -> componentDidUpdate())
  4.Unmounting (componentWillUnmount())

 for Initialization purpose constructor() in used
 componentWillMount() :gets executed just before componentis mounted on DOM

 Updating :will execute when state gets value changed or Updated 

  shouldComponentUpdate(newProps, newState) :it returns boolean  ,if it returns true then only the next methods of 'Updating' will execute other wise won't