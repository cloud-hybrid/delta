/**
 * @file Filter search.
 * @copyright IBM Security 2019 - 2021
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { getComponentNamespace } from '../../../../globals/namespace';
import * as defaultLabels from '../../../../globals/nls';

import FilterSelector from '../FilterSelector';
import { filterDataPropTypes, getFiltersArray } from '../FilterPanelUtilities';
import Search from '../../../Search';

export const namespace = getComponentNamespace('filter-search');

class FilterSearch extends Component {
  state = {
    searchValue: this.props.initialSearchValue,
  };

  /**
   * Handles filter toggling.
   * @param {Filter} filter Filter object to toggle.
   */
  onFilterSelection = (filter) => {
    this.setState({ searchValue: '' });
    this.props.onChange(filter);
  };

  /**
   * Handles search value change.
   * @param {KeyboardEvent} event Event generated by input change.
   */
  onFilterSearch = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  /**
   * Filters filter labels based on a given search value.
   * @param {string} string String to match filters labels against.
   */
  searchFilterData = (string) => {
    if (!string || string.length === 0) {
      return [];
    }

    const { filterData } = this.props;
    const filters = getFiltersArray(filterData);
    const stringToMatch = string.trim().toLowerCase();

    return filters
      .filter((filter) => filter.name.toLowerCase().includes(stringToMatch))
      .reduce((subcategories, filter) => {
        const filterParentId = filter.parent;
        const subcategoryFilters = subcategories[filterParentId]
          ? [...subcategories[filterParentId]]
          : [];

        return {
          ...subcategories,
          [filterParentId]: [...subcategoryFilters, filter.id],
        };
      }, {});
  };

  render() {
    const { filterData, labels, filterSearchLabel, noFiltersResultsLabel } =
      this.props;
    const { searchValue } = this.state;
    const resultsPanelVisible = searchValue && searchValue.length > 0;
    const searchResults = this.searchFilterData(searchValue);

    const resultsContainerClassNames = classnames(`${namespace}__results`, {
      [`${namespace}__results--visible`]: resultsPanelVisible,
    });

    const componentLabels = {
      ...defaultLabels.labels,
      ...defaultLabels.filterFalsey({
        FILTER_PANEL_SEARCH_LABEL: filterSearchLabel,
        FILTER_PANEL_SEARCH_NO_RESULTS_LABEL: noFiltersResultsLabel,
      }),
      ...labels,
    };

    const {
      FILTER_PANEL_SEARCH_NO_RESULTS_LABEL,
      SEARCH_CLOSE_BUTTON,
      SEARCH_LABEL,
      SEARCH_PLACEHOLDER_LABEL,
    } = {
      ...componentLabels,
      ...defaultLabels.filterFalsey({
        SEARCH_LABEL: componentLabels.FILTER_PANEL_SEARCH_LABEL,
        SEARCH_PLACEHOLDER_LABEL: componentLabels.FILTER_PANEL_SEARCH_LABEL,
        SEARCH_CLOSE_BUTTON: componentLabels.FILTER_PANEL_SEARCH_CLOSE_BUTTON,
      }),
    };

    return (
      <div className={namespace}>
        <Search
          className={`${namespace}__input`}
          closeButtonLabelText={SEARCH_CLOSE_BUTTON}
          labelText={SEARCH_LABEL}
          onChange={this.onFilterSearch}
          placeholder={SEARCH_PLACEHOLDER_LABEL}
          value={searchValue}
          size="sm"
        />
        {resultsPanelVisible && (
          <div className={resultsContainerClassNames}>
            {Object.keys(searchResults).length === 0 ? (
              <span className={`${namespace}__results--none`}>
                {FILTER_PANEL_SEARCH_NO_RESULTS_LABEL}
              </span>
            ) : (
              <ul className={`${namespace}__list`}>
                {Object.keys(searchResults)
                  .map(
                    (subcategoryId) => filterData.subcategories[subcategoryId]
                  )
                  .map((subcategory) => (
                    <li
                      key={`search-subcategory-${subcategory.id}`}
                      className={`${namespace}__subcategory`}
                    >
                      <h3 className={`${namespace}__subcategory__title`}>
                        {subcategory.name}
                      </h3>
                      <ul className={`${namespace}__list`}>
                        {searchResults[subcategory.id].map((filterId) => {
                          const filter = filterData.filters[filterId];
                          return (
                            <li key={`search-filter-${filter.id}`}>
                              <FilterSelector
                                filter={filter}
                                onChange={this.onFilterSelection}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        )}
      </div>
    );
  }
}

FilterSearch.propTypes = {
  /** @type {FilterData}  Filter data to used to render panel */
  filterData: filterDataPropTypes.isRequired,

  /** @type {string} Label for filter search input */
  filterSearchLabel: PropTypes.string,

  /** @type {string} Initial search value */
  initialSearchValue: PropTypes.string,

  /** @type {object} Externalized global labels */
  labels: defaultLabels.propType,

  /** @type {string} Label for filter search when no filters are found */
  noFiltersResultsLabel: PropTypes.string,

  /** @type {(filter: Filter) => {}} Callback function when any filter is toggled */
  onChange: PropTypes.func,
};

FilterSearch.defaultProps = {
  onChange: () => {},
  initialSearchValue: '',
  filterSearchLabel: '',
  noFiltersResultsLabel: '',
  labels: {},
};

export default FilterSearch;
