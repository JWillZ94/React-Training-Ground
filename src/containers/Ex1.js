import React from 'react';
import { connect } from 'react-redux';

const Ex1 = ({ num, addNum }) => {
  return (
    <div>
      { num }
      <button onClick={addNum}>+</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    num: state.exReducer1.num
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addNum: () => {
      dispatch({
        type: 'ACTION_1'
      })
    }
  };
}

const Example1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Ex1);

export default Example1;
