import React from 'react';

const Blog = () => {
    return (
        <div className='my-container container'>
            <div className='jobDetails p-14 mx-auto bg-gray-200 mb-12'>
                <p className=' text-2xl font-bold'>Blog</p>
            </div>

            <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
                <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>

                </div>
            </div>
            <div className='max-w-screen-xl sm:mx-auto'>
                <div className='grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2'>
                    <div className='space-y-8'>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                                When should you use context API?
                            </p>
                            <p className='text-gray-700'>
                                The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.
                                <br />
                                <br />
                                React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                            </p>
                        </div>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                                What is a custom hook?
                            </p>
                            <p className='text-gray-700'>
                                Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.
                                <br />
                                <br />

                            </p>
                        </div>

                    </div>
                    <div className='space-y-8'>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                                What is useRef?
                            </p>
                            <p className='text-gray-700'>
                                Ref means just reference, so it can be a reference to anything (DOM node, Javascript value, etc). The useRef hook returns a mutable object which doesn’t re-render the component when it’s changed. Think it like useState, but unlike useState, doesn’t trigger re-render of the component. The object that useRef returns have a current property that can hold any modifiable value.
                                <br />
                                <br />

                            </p>
                        </div>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                                What is useMemo?
                            </p>
                            <p className='text-gray-700'>
                                useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.
                                <br />
                                <br />

                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;