import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

class Services extends Component {
    state = { 
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo."
            },
            {
                icon: <FaHiking />,
                title: "endless hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo."
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo."
            },
            {
                icon: <FaBeer />,
                title: "strong beer",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo."
            }
        ]
    }
    render() { 
        return (
            <div>
                <section className="services">
                    <Title title="services" />
                    <div className="services-center">
                        {this.state.services.map((item, index) => {
                            return (
                                <article key={index} className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            )
                        })}
                    </div>

                
                </section>
                
            </div>
        );
    }
}

export default Services;