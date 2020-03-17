import React, { lazy, Suspense } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Loading from 'components/Loading'

import './App.scss'

const Home = lazy(() => import('pages/Home'))
const Events = lazy(() => import('pages/Events'))
const News = lazy(() => import('pages/News'))
const Services = lazy(() => import('pages/Services'))

const App: React.FC = () => {
    return (
        <Router>
            <div className='App'>
                <Header />
                <div className='container'>
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
