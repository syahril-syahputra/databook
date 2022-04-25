import axios from 'axios'
import React, { useCallback, useRef, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { dataContext } from '../App'
import Card from '../components/book/Card'
import { Dots } from "react-activity";

import "react-activity/dist/Dots.css";

import Detail from '../Modal/Detail'

import { SkeletonTheme } from 'react-loading-skeleton'
import CardLoading from '../components/book/CardLoading'
import { useInView } from 'react-intersection-observer';





const ListBook = props => {
    // const [data, dispatchData] = useContext(dataContext)

    const { category } = useParams()
    const [dataBook, setdataBook] = useState([])
    const [page, setpage] = useState(0)
    const [isLoading, setisLoading] = useState(false)

    const perpage = 12;
    const [isLoadingMore, setisLoadingMore] = useState(false)
    const [isLastPage, setisLastPage] = useState(false)

    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if ((!isLoading && !isLoadingMore) && inView) {

            if (page === 0) {
                getData()
            } else {
                getDataMore()
            }
        }
    }, [inView])

    useEffect(() => {
        setdataBook([])
        setpage(0)
        setisLastPage(false)
    }, [category])

    const getData = () => {
        setdataBook([])
        setisLoading(true)
        console.log('load page ' + page)
        axios.get(`/fee-assessment-books?categoryId=${category || 1}&size=${perpage}&page=${page}`).then(response => {
            setpage(page + 1)
            setisLoading(false)
            if (response.data.length < perpage) {
                setisLastPage(true)
            }
            setdataBook([...dataBook, ...response.data])
        }).catch(error => {
            setisLoading(false)
            console.log(error.status)
        })

    }
    const getDataMore = () => {

        setisLoadingMore(true)
        console.log('load page ' + page)
        axios.get(`/fee-assessment-books?categoryId=${category || 1}&size=${perpage}&page=${page}`).then(response => {
            setpage(page + 1)
            setisLoadingMore(false)
            if (response.data.length < perpage) {
                setisLastPage(true)
            }
            setdataBook([...dataBook, ...response.data])
        }).catch(error => {
            setisLoadingMore(false)
            if (error.response.status === 404) {
                setisLastPage(true)
            }

        })

    }

    //start
    const [hasMoreItems, sethasMoreItems] = useState(true)
    const loadMore = () => {
        console.log(page)
        if (!isLoadingMore) {
            setpage(page + 1)
            // getDataMore()
        }
    }
    //emd


    const [detailVisible, setdetailVisible] = useState(false)
    const [selectedBook, setselectedBook] = useState({})
    const callBack = data => {
        setselectedBook(data)
        setdetailVisible(true)
    }

    const loading = () => {
        const loadings = []
        for (var i = 1; i <= perpage; i++) {
            loadings.push(<CardLoading key={i} />)
        }
        return loadings;
    }
    return (
        <div className=''>
            <Detail visible={[detailVisible, setdetailVisible]} data={selectedBook} />


            {
                isLoading ?
                    <div className='grid  grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  '>
                        <SkeletonTheme baseColor="#DDD" highlightColor="#EEE">
                            {
                                loading()
                            }
                        </SkeletonTheme>
                    </div>
                    :

                    // <InfiniteScroll
                    //     threshold={0}
                    //     pageStart={0}
                    //     className='grid  grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  '
                    //     loadMore={loadMore}
                    //     hasMore={hasMoreItems}
                    //     loader={<div className="text-center">loading data ...</div>}>
                    //     {dataBook.map((item, index) => {
                    //         return <Card callBack={callBack} key={index} item={item} />
                    //     })
                    //     }
                    <div inView={inView}>
                        <div
                            className='grid  grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  '
                        >
                            {dataBook.map((item, index) => {
                                return <Card callBack={callBack} key={index} item={item} />
                            })
                            }

                        </div>
                        {
                            isLastPage ? null :
                                isLoadingMore ?
                                    <div className=' text-center items-center justify-center p-2 rounded-xl'>
                                         <Dots color="gray" />
                                    </div>
                                    :
                                    <div ref={ref} className="inview-block">

                                    </div>
                        }
                    </div>


            }

        </div>
    )
}

export default ListBook