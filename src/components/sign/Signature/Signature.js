import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import SignaturePad from 'react-signature-pad-wrapper';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const SignatureWrapper = styled.div`
  width: 100%;
  border: 1px solid #e2e2e2;
  color: #999;
`;

const SignatureButtonsContainer = styled.div`
  padding: 8px;
  border-top: 1px solid #e2e2e2;
`;

const Signed = styled.div`
  width: 100%;
  padding: 16px;
`;

const Img = styled.img`
  max-width: 100%;
`;

const DEFAULT_OPTIONS = {
  minWidth: 5,
  height: 200,
  penColor: 'rgb(2,2,2)'
};

class Signature extends Component {
  state = {
    signature: null
  };

  static propTypes = {
    saveAction: PropTypes.func.isRequired,
    signature: PropTypes.string,
    height: PropTypes.number,
    noSignatureAction: PropTypes.func,
    signButtonText: PropTypes.string,
    clearButtonText: PropTypes.string
  };

  static defaultProps = {
    noSignatureAction: () => alert('请先签好名后再保存！'),
    signature: null,
    height: 200,
    signButtonText: '保存',
    clearButtonText: '清除'
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.signature !== prevState.signature) {
      return { signature: nextProps.signature };
    } else return null;
  }

  handleClear = () =>
    this.setState({ signature: null }, this.signaturePad.instance.clear());

  handleSave = () => {
    if (this.signaturePad.isEmpty()) {
      this.props.noSignatureAction();
    } else {
      const signatureImage = this.signaturePad.toDataURL();
      console.log('这是Signature  ', signatureImage)
      this.setState(
        { signature: signatureImage },
        this.props.saveAction(signatureImage)
      );
    }
  };

  render() {
    const { signButtonText, clearButtonText, height } = this.props;
    const { signature } = this.state;
    const options = { ...DEFAULT_OPTIONS, height };

    return (
      <Fragment>
        {!signature && (
          <SignatureWrapper>
            请在此处签字确认，谢谢！
            <SignaturePad {...options} ref={ref => (this.signaturePad = ref)} />
            <SignatureButtonsContainer>
              <Button onClick={this.handleSave} primary>
                {signButtonText}
              </Button>
              <Button onClick={this.handleClear}>{clearButtonText}</Button>
            </SignatureButtonsContainer>
          </SignatureWrapper>
        )}
        {signature && (
          <Signed>
            Signed:
            <Img src={signature} alt="signature" />
          </Signed>
        )}
      </Fragment>
    );
  }
}

export default Signature;
