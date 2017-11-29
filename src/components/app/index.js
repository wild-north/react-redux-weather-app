import React from 'react';
import { Form } from '../form';
import { formConnector } from '../form/connector';
import { Loader } from '../loader';
import { loaderConnector } from '../loader/connector';
import { Results } from '../results';
import { resultsConnector } from '../results/connector';

const AppForm = formConnector(Form);
const AppLoader = loaderConnector(Loader);
const AppResults = resultsConnector(Results);

const App = ({ isError }) => (
    <div>
        <AppLoader/>

        {
            isError && (
                <div>Sorry, something went wrong :(</div>
            )
        }

        <AppForm/>
        <AppResults/>
    </div>
);

export default App;
