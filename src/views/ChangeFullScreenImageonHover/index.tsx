import React from 'react';
import './index.css';

export default function Index(): JSX.Element {
  const [active, setActive] = React.useState<number>(0);

  return (
    <div className="container">
      <div className="column" onMouseEnter={() => setActive(1)}>
        <div className="content">
          <h1>1</h1>
          <div className={`box ${active === 1 && 'active'}`}>
            <h2>Tempor ea fugiat cupidatat proident irure quis.</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. modi
              quia aperiam quasi ratione officiis itaque aspernatur. Corrupti,
              in consectetur? Exercitationem, impedit reprehenderit reiciendis
              rem sed obcaecati accusantium assumenda neque.
            </p>
          </div>
        </div>
        <div
          className={`bg bg1 ${(active === 1 || active === 0) && 'active'}`}
        ></div>
      </div>
      <div className="column" onMouseEnter={() => setActive(2)}>
        <div className="content">
          <h1>2</h1>
          <div className={`box ${active === 2 && 'active'}`}>
            <h2>Tempor ea fugiat cupidatat proident irure quis.</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. modi
              quia aperiam quasi ratione officiis itaque aspernatur. Corrupti,
              in consectetur? Exercitationem, impedit reprehenderit reiciendis
              rem sed obcaecati accusantium assumenda neque.
            </p>
          </div>
        </div>
        <div className={`bg bg2 ${active === 2 && 'active'}`}></div>
      </div>
      <div className="column" onMouseEnter={() => setActive(3)}>
        <div className="content">
          <h1>3</h1>
          <div className={`box ${active === 3 && 'active'}`}>
            <h2>Tempor ea fugiat cupidatat proident irure quis.</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. modi
              quia aperiam quasi ratione officiis itaque aspernatur. Corrupti,
              in consectetur? Exercitationem, impedit reprehenderit reiciendis
              rem sed obcaecati accusantium assumenda neque.
            </p>
          </div>
        </div>
        <div className={`bg bg3 ${active === 3 && 'active'}`}></div>
      </div>
      <div className="column" onMouseEnter={() => setActive(4)}>
        <div className="content">
          <h1>4</h1>
          <div className={`box ${active === 4 && 'active'}`}>
            <h2>Tempor ea fugiat cupidatat proident irure quis.</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. modi
              quia aperiam quasi ratione officiis itaque aspernatur. Corrupti,
              in consectetur? Exercitationem, impedit reprehenderit reiciendis
              rem sed obcaecati accusantium assumenda neque.
            </p>
          </div>
        </div>
        <div className={`bg bg4 ${active === 4 && 'active'}`}></div>
      </div>
    </div>
  );
}
