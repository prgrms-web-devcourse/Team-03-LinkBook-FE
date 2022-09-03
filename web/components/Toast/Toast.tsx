import ReactDOM from 'react-dom';
import ToastManager, { CreateToast } from './ToastManager';

const TOAST_PORTAL_ID = 'toast-portal';

class Toast {
  static instance: Toast;
  private portalId = TOAST_PORTAL_ID;
  private portal: HTMLElement | null = null;
  private createToast: CreateToast | null = null;

  constructor() {
    if (Toast.instance) {
      return Toast.instance;
    }
    Toast.instance = this;

    if (typeof document !== 'undefined') {
      const portalElement = document.getElementById(this.portalId);
      if (portalElement) {
        this.portal = portalElement;
        return;
      } else {
        this.portal = document.createElement('div');
        this.portal.id = this.portalId;
        this.portal.style.display = 'flex';
        this.portal.style.justifyContent = 'center';
        document.body.appendChild(this.portal);
      }

      ReactDOM.render(
        <ToastManager
          bind={(createToast) => {
            this.createToast = createToast;
          }}
        />,
        this.portal,
      );
    }
  }

  show(message: string, duration = 1500) {
    if (this.createToast) {
      this.createToast(message, duration);
    }
  }
}

export default new Toast();
