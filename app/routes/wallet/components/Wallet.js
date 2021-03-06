import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Peers from 'components/Peers'
import styles from './Wallet.scss'

class Wallet extends Component {
  componentWillMount() {
    const { fetchPeers } = this.props

    fetchPeers()
  }

  render() {
    const {
      peers: { peersLoading, peers, peer, peerForm },
      fetchPeers,
      setPeer,
      peerModalOpen,
      setPeerForm,
      connectRequest,
      disconnectRequest
    } = this.props

    return (
      <div className={styles.wallet}>
        <section className={styles.walletData}>
          <Peers
            fetchPeers={fetchPeers}
            peersLoading={peersLoading}
            peers={peers}
            modalPeer={peer}
            setPeer={setPeer}
            peerModalOpen={peerModalOpen}
            peerForm={peerForm}
            setPeerForm={setPeerForm}
            connect={connectRequest}
            disconnect={disconnectRequest}
          />
        </section>
      </div>
    )
  }
}

Wallet.propTypes = {
  fetchPeers: PropTypes.func.isRequired,
  peers: PropTypes.object.isRequired,
  setPeer: PropTypes.func.isRequired,
  peerModalOpen: PropTypes.bool.isRequired,
  setPeerForm: PropTypes.func.isRequired,
  connectRequest: PropTypes.func.isRequired,
  disconnectRequest: PropTypes.func.isRequired
}


export default Wallet
