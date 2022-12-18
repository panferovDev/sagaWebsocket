import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Col, Row, Button, ProgressBar,
} from 'react-bootstrap';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
import { getCode, submitCode } from '../api';

function CodePage() {
  const [code, setCode] = useState('');
  const { id } = useParams();
  const onChange = React.useCallback((value) => {
    setCode((prev) => ({ ...prev, code: value }));
  }, []);

  useEffect(() => {
    getCode(id)
      .then((res) => setCode(res.data));
  }, []);

  const submitCodeHandler = (codeState) => {
    submitCode(codeState);
  };

  if (isNaN(Number(id))) {
    return <h3>Something wrong with you id</h3>;
  }
  return (
    <Row>
      <Col>
        <h5>Code:</h5>
        {code
          ? (
            <CodeMirror
              value={code.code}
              height="300px"
              extensions={[javascript({ jsx: true })]}
              onChange={onChange}
              theme={vscodeDarkInit({
                settings: {
                  caret: '#c6c6c6',
                  fontFamily: 'monospace',
                },
              })}
            />
          )
          : <ProgressBar animated now={100} />}
        <Button
          className="mt-2"
          variant="outline-success"
          onClick={() => submitCodeHandler(code)}
        >
          Submit

        </Button>
      </Col>
    </Row>
  );
}

export default CodePage;
