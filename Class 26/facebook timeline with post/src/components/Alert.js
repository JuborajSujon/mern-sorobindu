class Alert {
  static danger(msg) {
    return `<p class="alert alert-danger d-flex justify-content-between">${msg}<button class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></p>`;
  }

  static success(msg) {
    return `<p class="alert alert-success d-flex justify-content-between">${msg}<button class="btn-close" data-bs-dismiss="alert" data-bs-dismiss="modal" aria-label="Close"></button></p>`;
  }

  static warning(msg) {
    return `<p class="alert alert-warning d-flex justify-content-between">${msg}<button class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></p>`;
  }

  static info(msg) {
    return `<p class="alert alert-info d-flex justify-content-between">${msg}<button class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></p>`;
  }
}

export default Alert;
