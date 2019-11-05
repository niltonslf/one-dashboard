import React from 'react'
import './styles.css'

import WidgetSmall from '../../components/Widgets/small'

export default function Dashboard() {
  return (
    <div className="page-container">
      <nav className="navbar-container">Navbar</nav>
      <div className="body-container">
        <div className="row first">
          <WidgetSmall
            title="Sunny"
            bodyLeft="26º/13º"
            bodyRight="09:30"
            footer="Curitiba - PR"
            backgroundSource="https://picsum.photos/id/866/300/150"
          />
          <WidgetSmall
            title="BTC"
            bodyRight="USD 20.00,00"
            footer="Última atualização: 15min"
          />
          <WidgetSmall
            title="ITAUSA"
            bodyRight="R$ 20,00"
            footer="Última atualização: 15min"
            color="purple"
          />
          <WidgetSmall
            title="XPML11"
            bodyRight="R$ 120,00"
            footer="Última atualização: 15min"
            color="pink"
          />
          <WidgetSmall
            title="Tesouro direto"
            bodyRight="R$ 20,00"
            footer="Última atualização: 15min"
            color="blue"
          />
        </div>

        <div className="row second">
          <div className="widget-default">Widget</div>
          <div className="widget-default">Widget</div>
          <div className="widget-default">Widget</div>
          <div className="widget-default">Widget</div>
        </div>

        <div className="row third">
          <div className="widget-default">Widget</div>
          <div className="widget-default">Widget</div>
          <div className="widget-default">Widget</div>
        </div>
      </div>
    </div>
  )
}
