import React, { useEffect } froom 'react';
import { connect } from 'react-redux';
import { fetchCards, fetchNewCards } from '../store';

const Cards = (props) => {
    useEffect(() => {
      props.fetchCards();
    }, []);
    return (
      <div>
        <h1> Magic Cards </h1>
        {props.isLoading ? <h4>Loading cards...</h4> : null}
        {props.error ? (
          <p style={{ color: "royalblue" }}> Uh oh... {props.error}</p>
        ) : null}
        {props.cards.length > 0 ? (
          <div>
            {props.cards.map((card) => {
              return (
                <div>
                  <img src={card.imageUrl} />
                  <h2 key={card.card_id}>{card.name}</h2>
                  <h3> {card.text} </h3>
                </div>
              );
            })}
          </div>
        ) : null}
        <button onClick={() => props.fetchNewCards(props.page)}>Next Page</button>
        </div>
    );
        };
        const mapStateToProps = (state) => {
            return {
                cards: state.cards,
                isLoading: state.isLoading,
                error: state.error,
                page: state.page,
            };
        };

        expoort default connect(mapStateToProps, { fetchCards, fetchNewCards })(Cards);