import React from "react";
import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";

import ListingItem from "../components/ListingItem";

import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

function Offers() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Get Reference
        const listingsRef = collection(db, "listings");

        // create a query
        const q = query(
          listingsRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(10)
        );

        // Execute Query
        const querySnap = await getDocs(q);
        const listings = [];

        querySnap.forEach((document) => {
          return listings.push({
            id: document.id,
            data: document.data(),
          });
        });
        setListings(listings);
        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch listings");
      }
    };
    fetchListings();
  }, []);

  return (
    <div className="category">
      <header>
        <p className="pageHeader">Offers</p>
      </header>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className="categoryListings">
              {listings.map((listing) => (
                <ListingItem
                  listing={listing.data}
                  id={listing.id}
                  key={listing.id}
                />
              ))}
            </ul>
          </main>
        </>
      ) : (
        <p>No current offers at this time</p>
      )}
    </div>
  );
}

export default Offers;
