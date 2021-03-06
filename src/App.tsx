import React, { lazy, Suspense } from 'react'
import ReactGA from 'react-ga'

/* import firebase from '@firebase/app'
import { FirestoreProvider } from 'react-firestore' */

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Loading from 'components/Loading'

import './App.scss'

/* const config = {
    apiKey: 'aaa',
    projectId: 'aa'
}

firebase.initializeApp(config) */
ReactGA.initialize('UA-133228609-9')

const Home = lazy(() => import('pages/Home'))
const News = lazy(() => import('pages/News'))

const App: React.FC = () => {
    return (
        <Router>
            <div className='App'>
                <Header />
                <div>
                    <Suspense fallback={<Loading />}>
                        <Switch>
                            {/* <Route path='/eventos'>
                            <Events />
                        </Route>
                        <Route path='/noticias'>
                            <News />
                        </Route>
                        <Route path='/servicios'>
                            <Services />
                        </Route> */}
                            <Route path='/' default>
                                <Home />
                            </Route>
                        </Switch>
                    </Suspense>
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default App
