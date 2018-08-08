import React from 'react';
import { connect } from 'react-redux';

function Ex2({data}) {
  return (
    <div>
      { data }
    </div>
  );
}

const mapStateToProps = () => {
  return {};
}

const mapDispatchToProps = () => {
  return {};
}

const Example2 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Ex2);

export default Example2;
