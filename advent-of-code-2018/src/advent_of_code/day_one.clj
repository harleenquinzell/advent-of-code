(ns advent-of-code.day-one
  (:require [clojure.string :as str]
            [advent-of-code.core :as core]))

(defn sum-all-frequencies [list]
  (reduce + list))

(defn solve-first-problem [file-path]
  (->> file-path
       core/file->list
       sum-all-frequencies))

(defn find-repeated-frequency [original-list]
  (loop [current-list original-list
         current-frequency 0
         frequency-list #{0}]
    (let [new-frequency (+ current-frequency (first current-list))]
      (if (contains? frequency-list new-frequency)
        new-frequency
        (let [rest-of-current-list (rest current-list)
              recur-list (cond (empty? rest-of-current-list)
                               original-list
                               :else rest-of-current-list)]
          (recur recur-list
                 new-frequency
                 (conj frequency-list new-frequency)))))))

(defn solve-second-problem [file-path]
  (->> file-path
       core/file->list
       find-repeated-frequency))

