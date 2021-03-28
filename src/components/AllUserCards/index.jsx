import React from "react";
import { useRouter } from "next/router";

const AllUserCards = ({ users }) => {
  const router = useRouter();
  function editUser(id) {
    router.push(`edit/${id}`);
  }
  async function deleteUser(user) {
    await fetch("http://localhost:3000/api/userdata", {
      method: "delete",
      body: JSON.stringify(user),
    });
    router.reload();
  }

  return (
    <div className="d-flex flex-row flex-wrap">
      {users.map((user) => {
        return (
          <div className="col-12 col-sm-6 col-md-3 card d-flex p-2">
            <img
              className="card-img-top"
              src={user.Image}
              alt="Card image cap"
            />
            <div className="card-body">
              <div>
                <h6 className="card-title d-inline-block">ID : </h6>
                <p className="card-text d-inline-block">{user.id}</p>
              </div>
              <div>
                <h6 className="card-title d-inline-block">Name : </h6>
                <p className="card-text d-inline-block">{user.name}</p>
              </div>
              {user.address && (
                <div>
                  <h6 className="card-title d-inline-block">Address : </h6>
                  <p className="card-text d-inline-block">{user.address}</p>
                </div>
              )}
              <div>
                <div
                  className="btn btn-primary"
                  onClick={() => {
                    editUser(user.id);
                  }}
                >
                  Edit
                </div>
                <div
                  className="btn btn-danger"
                  onClick={() => {
                    deleteUser(user);
                  }}
                >
                  Delete
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllUserCards;
