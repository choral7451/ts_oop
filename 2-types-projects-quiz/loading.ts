{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(ressource: ResourceLoadState) {
    if(ressource.state === 'loading') console.log('👀 loading...')
    else if (ressource.state === 'success') {
      console.log(`content : ${ressource.response.body}`);
      console.log('😃 loaded')
    } else if ( ressource.state === 'fail') {
      console.log(`reason : ${ressource.reason}`);
      console.log('😱 no network')
    } else throw Error(`resource Error ${ressource}`)
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
